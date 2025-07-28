import { interval, take, of } from 'rxjs';

const source$ = interval(1000).pipe(take(4));

async function getTotal() {
  let total = 0;

  await source$.forEach((value) => {
    total += value;
    console.log('observable -> ' + value);
  });

  return total;
}

getTotal().then((total) => console.log('Total: ' + total));
