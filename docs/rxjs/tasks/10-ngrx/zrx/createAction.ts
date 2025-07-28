import { Action, ActionCreator, ActionType } from './types';

export function props<T extends object>() {
  return (payload: T) => ({ payload });
}

export function createAction<T extends ActionType>(type: T): () => Action<T>;
export function createAction<T extends ActionType, P extends any[]>(
  type: T,
  config: (...args: P) => object
): ActionCreator<P, ReturnType<typeof config> & Action<T>>;
export function createAction<T extends ActionType, P extends any[]>(
  type: T,
  config?: (...args: P) => object
) {
  if (config) {
    return (...args: P) => ({
      type,
      ...config(...args),
    });
  }
  return () => ({ type });
}
