import { Selector } from './types';

export function createSelector<T, V1, R>(
  s1: Selector<T, V1>,
  projector: (v1: V1) => R
): Selector<T, R>;
export function createSelector<T, V1, V2, R>(
  s1: Selector<T, V1>,
  s2: Selector<T, V2>,
  projector: (v1: V1, v2: V2) => R
): Selector<T, R>;
export function createSelector(...selectors: any[]) {
  const projector = selectors.pop();
  return (state: any) => {
    const values = selectors.map((selector) => selector(state));
    return projector(...values);
  };
}
