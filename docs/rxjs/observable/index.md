**Observable** - это отложенные наборы данных с несколькими значениями.

* `Функция` - это лениво вычисляемое вычисление, которое синхронно возвращает одно значение при вызове.
* `Генератор` - это лениво вычисляемое вычисление, которое синхронно возвращает от нуля до (потенциально) бесконечных значений на итерации.
* `Обещание` - это вычисление, которое может (или не может) в конечном итоге вернуть единственное значение.
* `Observable` - это лениво вычисляемое вычисление, которое может синхронно или асинхронно возвращать от нуля до (потенциально) бесконечных значений с момента его вызова и далее.

```js
import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');
```

> Подписка на наблюдаемый объект аналогична вызову функции.

> Наблюдаемые объекты могут передавать значения либо синхронно, либо асинхронно.

