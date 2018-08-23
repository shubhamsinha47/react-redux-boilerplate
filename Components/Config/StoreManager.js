import Env from './Env'

class StoreManager {
    constructor() {
        this.path = `${Env.baseUrl}-${Env.app_name}:state`
    }

    loadState() {
        try {
            let serializedState = localStorage.getItem(this.path);

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem(this.path, serializedState);

        }
        catch (err) {
            console.log('error while storing data')
        }
    }

    initializeState() {
        return {
              //state object
        }
    }

    reset() {
        try {
            return localStorage.removeItem(this.path)
        } catch (err) {
            console.log('removing the store object')
        }
    }
}

export default StoreManager