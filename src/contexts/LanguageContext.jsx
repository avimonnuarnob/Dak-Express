import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/LanguageReducer';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children = null }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
