import { Observable } from 'rxjs';

export type ActionType = string | number | symbol;

export interface Action<T = any> {
  type: T;
  payload?: any;
}

export type ActionCreator<P extends any[] = any[], R extends object = {}> = (
  ...args: P
) => R & Action;

export type OnReducer<S> = (state: S, action: Action) => S;

export type Selector<T, V> = (state: T) => V;

export type Effect = (
  actions$: Observable<Action>
) => Observable<Action | void>;
