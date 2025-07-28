/*
 * fromEvent(target, event) — создает Observable из DOM событий
 *
 * merge(...observables) — объединяет несколько потоков в один
 *
 * scan(reducer, seed) — как reduce, но для каждого промежуточного значения
 */

import { fromEvent, map, merge, scan } from 'rxjs';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <button id="increment">+</button>
    <button id="decrement">-</button>
    <div id="result">2</div>
  </div>
`;

const incrementBtn = document.querySelector<HTMLButtonElement>('#increment')!;
const decrementBtn = document.querySelector<HTMLButtonElement>('#decrement')!;
const counterElement = document.querySelector<HTMLDivElement>('#result')!;

const defaultCounter = +counterElement.innerHTML;

const inc$ = fromEvent(incrementBtn, 'click').pipe(map(() => 1));
const dec$ = fromEvent(decrementBtn, 'click').pipe(map(() => -1));

merge(inc$, dec$)
  .pipe(scan((acc, x) => acc + x, defaultCounter))
  .subscribe((total) => {
    counterElement.innerHTML = total.toString();
  });
