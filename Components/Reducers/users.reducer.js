export default (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_INITIAL_USER':
			return  {
						'token': action.payload
					}
			break

		case 'LOAD_USER_DATA':
			return action.payload
			break

		case 'UPDATE_USER_DATA': 
			return action.payload
			break

		case 'RESET_OBJECT': 
			return []
			break
	}

	return state
}