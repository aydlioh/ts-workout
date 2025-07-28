import { createFeatureSelector, createSelector } from '../zrx';

import { CounterState } from './counter.state';

export const selectCounterState = createFeatureSelector<{
  counter: CounterState;
}>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state) => state?.count
);
