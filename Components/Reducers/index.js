import { createStore, combineReducers } from 'redux'

import StoreManager from './../Config/StoreManager'
import UserReducers from './users.reducer'

const storeManager = new StoreManager();

let appReducers = combineReducers({
					users: UserReducers
				})

let store = createStore(appReducers, storeManager.loadState());

store.subscribe(() => {
    storeManager.saveState(store.getState());
});

export default store;