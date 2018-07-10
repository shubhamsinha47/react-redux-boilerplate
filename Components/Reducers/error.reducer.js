export default (state = [], action) => {
	switch (action.type) {
		case 'SET_ERROR_OBJECT': 
			return action.payload
			break

		case 'RESET_OBJECT': 
			return []
			break
	}

	return state
}