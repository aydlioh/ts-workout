import { OnReducer, ActionType, Action } from './types';

export function createReducer<S>(
  initialState: S,
  ...ons: { reducer: OnReducer<S>; types: ActionType[] }[]
) {
  return function (state = initialState, action: Action): S {
    const reducer = ons
      .filter((on) => on.types.includes(action.type))
      .reduce(
        (currentReducer, on) => {
          return (s: S) => on.reducer(s, action);
        },
        (s: S) => s
      );

    return reducer(state);
  };
}

export function on<C extends (...args: any[]) => Action, S>(
  creator: C | C[],
  reducer: (state: S, action: ReturnType<C>) => S
) {
  const creators = Array.isArray(creator) ? creator : [creator];
  const types = creators.map((c) => c().type);
  return { reducer: reducer as OnReducer<S>, types };
}
