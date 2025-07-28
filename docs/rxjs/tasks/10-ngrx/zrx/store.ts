import {
  BehaviorSubject,
  distinctUntilChanged,
  map,
  Observable,
  scan,
  Subject,
} from 'rxjs';

import { Action } from './types';

export class Store<S = object> extends BehaviorSubject<S> {
  private actions$ = new Subject<Action>();
  private rootReducer: (state: S | undefined, action: Action) => S;

  constructor(
    rootReducer: (state: S | undefined, action: Action) => S,
    initialState?: S
  ) {
    const initialStoreState =
      initialState ?? rootReducer(undefined, { type: '@@INIT' } as Action);
    super(initialStoreState);

    this.rootReducer = rootReducer;

    this.actions$
      .pipe(
        scan(
          (state: S | undefined, action) => this.rootReducer(state, action),
          initialStoreState
        ),
        distinctUntilChanged()
      )
      .subscribe((state) => super.next(state!));
  }

  dispatch(action: Action) {
    this.actions$.next(action);
  }

  select<K>(selector: (state: S) => K): Observable<K> {
    return this.pipe(map(selector), distinctUntilChanged());
  }
}
