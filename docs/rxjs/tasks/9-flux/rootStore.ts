import { FluxDispatcher } from './dispatcher';
import { FluxStore } from './store';
import { Action } from './types';

type CounterState = number;
type UserState = { name: string };

export class RootStore {
  private dispatcher: FluxDispatcher;

  public counterStore: FluxStore<CounterState>;
  public userStore: FluxStore<UserState>;

  constructor() {
    this.dispatcher = new FluxDispatcher();

    this.counterStore = new FluxStore<CounterState>({
      initialState: 0,
      reducer: (state, action) => {
        switch (action.type) {
          case 'INCREMENT':
            return state + 1;
          case 'DECREMENT':
            return state - 1;
          case 'SET':
            return action.payload ?? state;
          case 'RESET':
            return 0;
          default:
            return state;
        }
      },
      dispatcher: this.dispatcher,
    });

    this.userStore = new FluxStore<UserState>({
      initialState: { name: 'John Doe' },
      reducer: (state, action) => {
        switch (action.type) {
          case 'SET_NAME':
            return { ...state, name: action.payload ?? state.name };
          default:
            return state;
        }
      },
      dispatcher: this.dispatcher,
    });
  }

  dispatch(action: Action): void {
    this.dispatcher.dispatch(action);
  }
}
