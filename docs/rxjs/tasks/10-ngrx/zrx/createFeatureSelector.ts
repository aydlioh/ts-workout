import { Selector } from './types';

export function createFeatureSelector<T>(
  featureKey: keyof T
): Selector<object, T[keyof T]> {
  return (state: any) => state[featureKey];
}
