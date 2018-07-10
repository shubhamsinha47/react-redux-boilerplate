import { createStore, combineReducers } from 'redux'

import StoreManager from './../Config/StoreManager'
import UserReducers from './users.reducer'
import ErrorReducers from './error.reducer'

const storeManager = new StoreManager();

let appReducers = combineReducers({
					users: UserReducers,
					errors: ErrorReducers
				})

let store = createStore(appReducers, storeManager.loadState());

store.subscribe(() => {
    storeManager.saveState(store.getState());
});

export default store;