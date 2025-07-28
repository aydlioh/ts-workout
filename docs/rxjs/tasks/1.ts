/*
 * range(start, count) — создает Observable, излучающий последовательность чисел
 *
 * filter(predicate) — пропускает только значения, удовлетворяющие условию
 *
 * map(project) — преобразует каждый элемент потока
 *
 * subscribe({ next, error, complete }) — подписка с обработчиками событий
 */

import { range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const obs$ = range(1, 10).pipe(
  filter((x) => x % 2 === 0),
  map((x) => x * 10)
);

obs$.subscribe((x) => console.log(x));
