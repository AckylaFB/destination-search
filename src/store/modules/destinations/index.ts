import * as selectors from './selectors';
import destinationsSlice from './slice';

export * from './slice';
export { actions as thunkActions } from './actions';

const { actions, reducer } = destinationsSlice;

export { actions, reducer, selectors };
