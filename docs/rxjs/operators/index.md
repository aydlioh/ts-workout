Операторы - это функции.

1. **Конвейерные операторы** - это те, которые могут быть переданы по конвейеру в наблюдаемые объекты с использованием синтаксиса `observableInstance.pipe(operator)` или, чаще, `observableInstance.pipe(operatorFactory())`.
> Конвейерный оператор - это, по сути, чистая функция, которая принимает один наблюдаемый объект в качестве входных данных и генерирует другой наблюдаемый объект в качестве выходных данных. Подписка на выходной наблюдаемый объект также подпишется на входной наблюдаемый объект.

2. **Операторы создания** - это операторы другого типа, которые могут вызываться как автономные функции для создания нового наблюдаемого объекта. Например: `of(1, 2, 3)` создает наблюдаемый объект, который будет содержать 1, 2 и 3, один за другим.

```js
import { of, map } from 'rxjs';

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));
```