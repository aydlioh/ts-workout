import { Observable, filter, tap, shareReplay } from 'rxjs';

import { Store } from './store';
import { Effect, Action } from './types';

export function createEffect(
  effectFactory: () => Effect,
  { dispatch = true } = {}
) {
  return (actions$: Observable<Action>, store?: Store) => {
    return () => {
      const effect$ = effectFactory()(actions$).pipe(
        filter((effectAction) => effectAction !== undefined),
        tap((effectAction) => {
          if (dispatch && store && effectAction) {
            store.dispatch(effectAction as Action);
          }
        }),
        shareReplay()
      );
      return effect$.subscribe();
    };
  };
}
