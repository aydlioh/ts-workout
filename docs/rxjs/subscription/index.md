**Подписка** - это объект, представляющий доступный ресурс, обычно выполнение наблюдаемого объекта. У подписки есть один важный метод, `unsubscribe` который не принимает аргументов и просто распоряжается ресурсом, удерживаемым подпиской.

```js
import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
```

> Подписка, по сути, просто имеет unsubscribe() функцию освобождения ресурсов или отмены наблюдаемых выполнений

```js
import { interval } from 'rxjs';
 
const observable1 = interval(400);
const observable2 = interval(300);
 
const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
 
subscription.add(childSubscription);
 
setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);
```