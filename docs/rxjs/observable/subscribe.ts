import { of } from 'rxjs';

let sum = 0;

of(1, 2, 3).subscribe(
  (value) => {
    sum = sum + value;
  },
  undefined,
  () => console.log('Sum equals: ' + sum)
);

import { interval } from 'rxjs';

const subscription = interval(1000).subscribe({
  next(num) {
    console.log(num);
  },
  complete() {
    console.log('completed!');
  },
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('unsubscribed!');
}, 2500);
