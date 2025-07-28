import { createReducer, on } from '../zrx';

import { increment, decrement, multiply } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(multiply, (state, { payload: { factor } }) => ({
    ...state,
    count: state.count * factor,
  }))
);
