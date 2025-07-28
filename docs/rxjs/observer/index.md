**Наблюдатели** - это просто объекты с тремя обратными вызовами, по одному для каждого типа уведомления, которое может доставить Наблюдаемый объект

```js
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```


