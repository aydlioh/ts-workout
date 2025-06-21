import viteLogo from '/vite.svg';
import './rxjs-test';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`;
