// Конфигурация
const LOGIN_PAGE = '/login';
const CHANNEL_NAME = 'auth_channel';

// Элементы интерфейса
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <div>
    <h1>Авторизованы как: <span id="user-email">user@example.com</span></h1>
    <button id="logoutBtn">Выйти из системы</button>
    <div id="eventsLog" style="margin-top: 20px; font-family: monospace;"></div>
  </div>
`;

const eventsLog = document.getElementById('eventsLog')!;
const logoutBtn = document.getElementById('logoutBtn')!;

// Логирование событий
function logEvent(message: string) {
  const now = new Date().toLocaleTimeString();
  eventsLog.innerHTML += `<div>[${now}] ${message}</div>`;
  eventsLog.scrollTop = eventsLog.scrollHeight;
}

// Инициализация канала связи
let authChannel: BroadcastChannel | StorageChannel;

// Fallback-реализация через LocalStorage
class StorageChannel {
  private channelName: string;

  constructor(name: string) {
    this.channelName = name;
    window.addEventListener('storage', this.handleStorageEvent);
  }

  postMessage(message: any) {
    localStorage.setItem(
      this.channelName,
      JSON.stringify({
        ...message,
        _timestamp: Date.now(),
      })
    );
    // Автоочистка через 100 мс
    setTimeout(() => {
      localStorage.removeItem(this.channelName);
    }, 100);
  }

  private handleStorageEvent = (event: StorageEvent) => {
    if (event.key === this.channelName && event.newValue) {
      try {
        const message = JSON.parse(event.newValue);
        if (message && typeof this.onmessage === 'function') {
          this.onmessage({ data: message } as MessageEvent);
        }
      } catch (e) {
        console.error('Error parsing storage message', e);
      }
    }
  };

  onmessage: ((event: MessageEvent) => void) | null = null;
}

// Инициализация канала связи
if (typeof BroadcastChannel !== 'undefined') {
  authChannel = new BroadcastChannel(CHANNEL_NAME);
  logEvent('Используется Broadcast Channel API');
} else {
  authChannel = new StorageChannel(CHANNEL_NAME);
  logEvent('Используется LocalStorage fallback');
}

// Обработчик сообщений
authChannel.onmessage = (event: MessageEvent) => {
  if (event.data.type === 'logout') {
    logEvent(`Получена команда выхода (от ${event.data.source})`);
    showLogoutNotification();
  }
};

// Функция выхода
async function performLogout() {
  // Здесь должна быть реальная логика выхода (API-запрос и т.д.)
  await new Promise((resolve) => setTimeout(resolve, 500)); // Имитация запроса

  // Отправка сообщения другим вкладкам
  authChannel.postMessage({
    type: 'logout',
    source: 'current_tab',
    timestamp: Date.now(),
  });

  // Действия для текущей вкладки
  logEvent('Вы вышли из системы в этой вкладке');
  redirectToLogin();
}

// Перенаправление на страницу входа
function redirectToLogin() {
  logEvent('Перенаправление на страницу входа...');
  setTimeout(() => {
    window.location.href = LOGIN_PAGE;
  }, 1500);
}

// Уведомление о выходе в других вкладках
function showLogoutNotification() {
  const notification = document.createElement('div');
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 20px;
      background: #ffebee;
      border: 1px solid #ffcdd2;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
    ">
      <h3 style="margin: 0 0 10px 0; color: #c62828;">Сессия завершена</h3>
      <p>Вы вышли из системы в другой вкладке.</p>
      <button id="closeNotification" style="
        margin-top: 10px;
        padding: 8px 16px;
        background: #c62828;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      ">Понятно</button>
    </div>
  `;

  document.body.appendChild(notification);

  notification
    .querySelector('#closeNotification')!
    .addEventListener('click', () => {
      notification.remove();
      redirectToLogin();
    });
}

// Инициализация
logEvent('Система синхронизации вкладок активирована');
logoutBtn.addEventListener('click', performLogout);
