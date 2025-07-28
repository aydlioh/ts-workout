import { Observable, filter, map, tap } from 'rxjs';
import { Action, createEffect } from '../zrx';

import { increment, decrement, multiply } from './counter.actions';

export const multiplyEffect = createEffect(
  () => (actions$: Observable<Action>) =>
    actions$.pipe(
      filter((action) => action.type === increment().type),
      map(() => multiply({ factor: 2 })),
      tap(() => console.log('Multiplied by 2'))
    )
);
