/*
 * combineLatest([observables]) — объединяет последние значения нескольких потоков
 *
 * interval(ms) — создает поток, излучающий числа с интервалом
 *
 * take(count) — завершает поток после N значений
 */

import { combineLatest, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const nums$ = interval(1000).pipe(
  map((x) => x + 1),
  take(3)
);

const symbs$ = interval(500).pipe(
  map((i) => ['A', 'B', 'C'][i]),
  take(3)
);

// forkJoin([nums$, symbs$]).subscribe(([num, symb]) =>
//   console.log(`${num}${symb}`)
// );

combineLatest([nums$, symbs$])
  .pipe(map(([num, symb]) => `${num}${symb}`))
  .subscribe(console.log);
