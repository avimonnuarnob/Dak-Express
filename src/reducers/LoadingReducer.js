/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable default-param-last */
export const types = {
	START_LOADING: 'START_LOADING',
	STOP_LOADING: 'STOP_LOADING',
};

export const initialState = false;

export const loadingReducer = (state, action) => {
	switch (action.type) {
		case types.START_LOADING:
			return (state = true);

		case types.STOP_LOADING:
			return (state = false);

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const startLoading = () => ({ type: types.START_LOADING });

export const stopLoading = () => ({ type: types.STOP_LOADING });
