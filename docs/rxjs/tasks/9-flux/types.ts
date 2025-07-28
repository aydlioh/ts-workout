import { Observable } from 'rxjs';

export interface Action<T = any> {
  type: string;
  payload?: T;
}

export type Reducer<T> = (state: T, action: Action) => T;

export type Listener = () => void;

export type Dispatcher = {
  dispatch(action: Action): void;
  actions$: Observable<Action>;
};

export type StoreConfig<T> = {
  initialState: T;
  reducer: Reducer<T>;
  dispatcher: Dispatcher;
};
