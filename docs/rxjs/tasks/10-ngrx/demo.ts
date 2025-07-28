import { increment, decrement } from './counter/counter.actions';
import { selectCount } from './counter/counter.selectors';
import { counterStore } from './counter/counter.store';

counterStore.dispatch(increment());
counterStore
  .select(selectCount)
  .subscribe((count) => console.log('Count:', count));

counterStore.dispatch(decrement());

// Не работает и я хз почему, ну зато выглядит красиво
