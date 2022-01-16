/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import { useReducer } from 'react';
import LanguageContext from '../contexts/LanguageContext';

/* eslint-disable default-param-last */
const initialState = localStorage.getItem('language') || 'ENGLISH';

// action types
export const types = {
	TOGGLE_LANGUAGE: 'TOGGLE_LANGUAGE',
};

// action reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.TOGGLE_LANGUAGE:
			return (state = action.payload);

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

// action type
export const changeLanguage = (payload = 'ENGLISH') => ({ type: types.TOGGLE_LANGUAGE, payload });

// context provider
export const LanguageProvider = ({ children = null }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
