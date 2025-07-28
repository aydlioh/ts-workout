import { Store } from '../zrx';

import { initialState } from './counter.state';
import { counterReducer } from './counter.reducer';

export const counterStore = new Store(counterReducer, initialState);
