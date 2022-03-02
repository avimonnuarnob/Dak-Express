import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/ErrorReducer';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children = null }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};
