import { interval } from 'rxjs';
import { filter, map, scan } from 'rxjs/operators';

interval(1000)
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x + x),
    scan((acc, x) => acc + x, 0)
  )
  .subscribe(console.log);

parseInt('123', 8);
