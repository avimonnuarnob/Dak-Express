/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
export const types = {
	TOGGLE_LANGUAGE: 'TOGGLE_LANGUAGE',
};

export const initialState = localStorage.getItem('language') || 'en';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_LANGUAGE:
			return (state = action.payload);

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const changeLanguage = (payload = 'en') => ({ type: types.TOGGLE_LANGUAGE, payload });
