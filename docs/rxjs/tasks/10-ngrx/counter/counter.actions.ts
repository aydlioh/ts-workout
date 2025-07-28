import { createAction, props } from '../zrx';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction(
  '[Counter] Multiply',
  props<{ factor: number }>()
);
