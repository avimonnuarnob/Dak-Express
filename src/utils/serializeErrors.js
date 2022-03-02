import { showError } from '../reducers/ErrorReducer';

export const catchAllErrors = (dispatch = null, error = {}) => {
	if (error?.response?.data) {
		if (error?.response?.data?.details) {
			const field = error?.response?.data?.details[0]?.field;
			const errorMessage = error?.response?.data?.details[0]?.message[0];

			dispatch(showError(`${field.toUpperCase()}, ${errorMessage}`));
		} else if (error?.response?.data?.detail) {
			dispatch(showError(error?.response?.data?.detail));
		} else {
			dispatch(showError(error?.response?.data?.message));
		}
	} else if (error?.message) {
		dispatch(showError(error?.message));
	} else {
		dispatch(showError('Unknown Error Occured!'));
	}
};
