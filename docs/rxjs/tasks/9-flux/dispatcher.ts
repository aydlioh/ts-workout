import { Subject } from 'rxjs';

import { Action, Dispatcher } from './types';

export class FluxDispatcher implements Dispatcher {
  private readonly actionSubject = new Subject<Action>();

  public actions$ = this.actionSubject.asObservable();

  public dispatch(action: Action): void {
    this.actionSubject.next(action);
  }
}
