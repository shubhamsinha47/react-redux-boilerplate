import axios from 'axios'
import env from './../Config/Env'

/**
 * requestHandlerPost function for handling POST server api request
 * 
 * @param  {[type]} url        [description]
 * @param  {[type]} data       [description]
 * @param  {[type]} successFun [description]
 * @param  {[type]} errorFun   [description]
 * @return {[type]}            [description]
 */
export function requestHandlerPost(url, data, successFun, errorFun) {
	return axios.post(`${env.baseApiUrl}${url}`, data)
				.then(function (response) { 
					if (response.data.error) {
						return errorFun(response.data)
					}
					return successFun(response.data)
				})
				.catch(function (error) { 
					return errorFun(error)
				})
}

/**
 * requestHandlerGet function for handling GET server api request
 * 
 * @param  {[type]} url        [description]
 * @param  {[type]} data       [description]
 * @param  {[type]} successFun [description]
 * @param  {[type]} errorFun   [description]
 * @return {[type]}            [description]
 */
export function requestHandlerGet(url, data = null, successFun, errorFun) {
	return axios.get(`${env.baseApiUrl}${url}`)
	  			.then(function (response) {
	  				if (response.data.error) {
						return errorFun(response.data)
					}
	    			return successFun(response.data)
	  			})
	  			.catch(function (error) {
			    	return errorFun(error)
			  	});
}

/**
 * logData function to log the data over console
 * this is just a wrapper around the around 
 * console.log() function.
 *  
 * @param  data 
 * @param  name 
 * @return      
 */
export function logData(data = null, name = null) {
	console.log(`------------${ name } start-------------`)
	console.log(data)
	console.log(`------------${ name } end-------------`)
}

/**
 * isEmpty function to check if any given 
 * object is empty or not.
 * 
 * @param  {[type]}  arg [description]
 * @return {Boolean}     [description]
 */
export function isEmpty(arg) {
  	for (var item in arg) {
    	return false;
  	}
  	
  	return true;
}