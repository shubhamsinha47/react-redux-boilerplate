import axios from 'axios'

import env from './Env'

function configAxios() {
	axios.defaults.baseURL = `${env.baseUrl}`
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
}

export function bootstrapApp() {
	configAxios()
}

export default bootstrapApp
