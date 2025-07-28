import { map, merge, scan, Subject } from 'rxjs';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <button id="inc">+</button>
  <button id="dec">-</button>
  <button id="reset">Reset</button>
  <div id="count">0</div>
`;

type State = { count: number };

const inc$ = new Subject<void>();
const dec$ = new Subject<void>();
const reset$ = new Subject<void>();

const actions$ = merge(
  inc$.pipe(map(() => 1)),
  dec$.pipe(map(() => -1)),
  reset$.pipe(map(() => 0))
);

const state$ = actions$.pipe<State>(
  scan(
    (state, value) => {
      if (value === 0) return { count: 0 };
      return { count: state.count + value };
    },
    { count: 0 }
  )
);

state$.subscribe(({ count }) => {
  document.querySelector<HTMLDivElement>('#count')!.innerHTML =
    count.toString();
});

document
  .querySelector<HTMLButtonElement>('#inc')!
  .addEventListener('click', () => inc$.next());
document
  .querySelector<HTMLButtonElement>('#dec')!
  .addEventListener('click', () => dec$.next());
document
  .querySelector<HTMLButtonElement>('#reset')!
  .addEventListener('click', () => reset$.next());
