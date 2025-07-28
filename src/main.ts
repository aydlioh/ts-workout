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
