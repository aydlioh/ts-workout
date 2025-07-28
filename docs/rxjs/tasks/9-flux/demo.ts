import { RootStore } from './rootStore';

const rootStore = new RootStore();

rootStore.counterStore.state$.subscribe((count) => {
  console.log('Counter changed:', count);
});

rootStore.userStore.state$.subscribe((user) => {
  console.log('User changed:', user.name);
});

rootStore.dispatch({ type: 'INCREMENT' });
rootStore.dispatch({ type: 'INCREMENT' });
rootStore.dispatch({ type: 'SET_NAME', payload: 'Alice' });
rootStore.dispatch({ type: 'DECREMENT' });
