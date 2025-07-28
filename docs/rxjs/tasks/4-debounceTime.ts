import { debounceTime, fromEvent } from 'rxjs';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input type="text" id="search">
    <div id="result"></div>
  </div>
`;

const searchElement = document.querySelector<HTMLInputElement>('#search')!;
const resultElement = document.querySelector<HTMLDivElement>('#result')!;

const debounceSearch$ = fromEvent(searchElement, 'input').pipe(
  debounceTime(300)
);

debounceSearch$.subscribe(() => {
  resultElement.innerHTML = searchElement.value;
});
