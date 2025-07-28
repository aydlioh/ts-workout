import {
  EMPTY,
  filter,
  fromEvent,
  map,
  merge,
  scan,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="info-btn">Add Info</button>
    <button id="warning-btn">Add Warning</button>
    <button id="error-btn">Add Error</button>
    <button id="clear-btn">Clear All</button>
  </div>
  <div id="notifications-container" style="position: fixed; top: 20px; right: 20px;"></div>
  <div id="history-container" style="margin-top: 100px;"></div>
`;

const infoBtn = document.getElementById('info-btn')!;
const warningBtn = document.getElementById('warning-btn')!;
const errorBtn = document.getElementById('error-btn')!;
const clearBtn = document.getElementById('clear-btn')!;
const notificationsContainer = document.getElementById(
  'notifications-container'
)!;
const historyContainer = document.getElementById('history-container')!;

// Счетчик для генерации ID
let idCounter = 0;

type NotificationType = 'info' | 'warning' | 'error';

type NotificationAction =
  | { type: 'ADD'; notification: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'REMOVE'; id: number }
  | { type: 'CLEAR' };

type Notification = {
  id: number;
  message: string;
  type: NotificationType;
  timestamp: number;
};

const addInfoAction$ = fromEvent(infoBtn, 'click').pipe(
  map(
    (): NotificationAction => ({
      type: 'ADD',
      notification: {
        type: 'info',
        message: `Info message ${Math.floor(Math.random() * 100)}`,
      },
    })
  )
);

const addWarningAction$ = fromEvent(warningBtn, 'click').pipe(
  map(
    (): NotificationAction => ({
      type: 'ADD',
      notification: {
        type: 'warning',
        message: `Warning! ${Math.floor(Math.random() * 100)}`,
      },
    })
  )
);

const addErrorAction$ = fromEvent(errorBtn, 'click').pipe(
  map(
    (): NotificationAction => ({
      type: 'ADD',
      notification: {
        type: 'error',
        message: `Critical Error! ${Math.floor(Math.random() * 100)}`,
      },
    })
  )
);

const clearAction$ = fromEvent(clearBtn, 'click').pipe(
  map((): NotificationAction => ({ type: 'CLEAR' }))
);

const dispatcher$ = new Subject<NotificationAction>();

const notificationActions$ = dispatcher$.asObservable();

merge(
  addInfoAction$,
  addWarningAction$,
  addErrorAction$,
  clearAction$
).subscribe((action) => dispatcher$.next(action));

const notificationState$ = notificationActions$.pipe(
  scan(
    ({ active, history }, action) => {
      switch (action.type) {
        case 'ADD':
          const newNotif: Notification = {
            ...action.notification,
            id: ++idCounter,
            timestamp: Date.now(),
          };

          return {
            active: [
              ...(action.notification.type === 'error'
                ? [newNotif, ...active]
                : [...active, newNotif]),
            ].slice(0, 3),
            history: [...history, newNotif].slice(-100),
          };
        case 'REMOVE':
          return {
            active: active.filter((n) => n.id !== action.id),
            history,
          };
        case 'CLEAR':
          return {
            active: [],
            history,
          };
        default:
          return { active, history };
      }
    },
    { active: [], history: [] } as {
      active: Notification[];
      history: Notification[];
    }
  ),
  startWith({ active: [], history: [] })
);

const renderNotification = (notif: Notification): HTMLElement => {
  const element = document.createElement('div');
  element.id = `notif-${notif.id}`;
  element.style.cssText = `
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    color: white;
    position: relative;
    cursor: pointer;
    ${notif.type === 'info' ? 'background: #2196F3;' : ''}
    ${notif.type === 'warning' ? 'background: #FF9800;' : ''}
    ${notif.type === 'error' ? 'background: #F44336;' : ''}
  `;

  element.innerHTML = `
    <div>${notif.message}</div>
    <small>${new Date(notif.timestamp).toLocaleTimeString()}</small>
    <button style="position: absolute; top: 5px; right: 5px; background: none; border: none; color: white; cursor: pointer">✕</button>
  `;

  fromEvent(element, 'click')
    .pipe(filter((e) => (e.target as HTMLElement).tagName === 'BUTTON'))
    .subscribe(() => {
      dispatcher$.next({ type: 'REMOVE', id: notif.id });
    });

  return element;
};

const setupAutoRemove = () => {
  const autoRemove$ = notificationState$.pipe(
    switchMap(({ active }) => {
      return merge(
        ...active.map((notif) =>
          timer(notif.type === 'error' ? 3000 : 5000).pipe(
            takeUntil(
              notificationActions$.pipe(
                filter(
                  (action) => action.type === 'REMOVE' && action.id === notif.id
                )
              )
            ),
            map(() => notif.id)
          )
        )
      );
    })
  );

  autoRemove$.subscribe((id) => {
    dispatcher$.next({ type: 'REMOVE', id });
  });
};

setupAutoRemove();

notificationState$.subscribe(({ active, history }) => {
  notificationsContainer.innerHTML = '';
  active.forEach((notif) => {
    notificationsContainer.appendChild(renderNotification(notif));
  });

  historyContainer.innerHTML = `<h3>History (${history.length})</h3>`;
  history
    .slice()
    .reverse()
    .forEach((notif) => {
      const element = renderNotification(notif);
      element.style.opacity = '0.7';
      element.style.cursor = 'default';
      historyContainer.appendChild(element);
    });
});
