/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable default-param-last */
export const types = {
	SHOW_ERROR: 'SHOW_ERROR',
	REMOVE_ERROR: 'REMOVE_ERROR',
};

export const initialState = null;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SHOW_ERROR:
			return (state = action.payload);

		case types.REMOVE_ERROR:
			return (state = null);

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const showError = (message = '') => ({ type: types.SHOW_ERROR, payload: message });

export const removeError = () => ({ type: types.REMOVE_ERROR });
