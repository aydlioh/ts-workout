import { BehaviorSubject, Observable } from 'rxjs';
import { Dispatcher, Reducer, StoreConfig } from './types';

export class FluxStore<T> {
  private state: T;
  private reducer: Reducer<T>;
  private dispatcher: Dispatcher;
  private stateSubject: BehaviorSubject<T>;

  public state$: Observable<T>;

  constructor(config: StoreConfig<T>) {
    this.state = config.initialState;
    this.reducer = config.reducer;
    this.dispatcher = config.dispatcher;

    this.stateSubject = new BehaviorSubject(config.initialState);
    this.state$ = this.stateSubject.asObservable();

    this.dispatcher.actions$.subscribe((action) => {
      this.state = this.reducer(this.state, action);
      this.stateSubject.next(this.state);
    });
  }

  public getState(): T {
    return this.state;
  }
}

export const createStore = <T>(config: StoreConfig<T>): FluxStore<T> => new FluxStore(config);

