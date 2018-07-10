export default (type, data = null) => {
	return {
		type: type,
		payload: data
	}
}