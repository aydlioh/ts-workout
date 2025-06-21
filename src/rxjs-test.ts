import { of, map } from 'rxjs';

of(1, 2, 3)
  .pipe(map((x) => x * 2))
  .subscribe((val) => console.log('RxJS:', val));
