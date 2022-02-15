import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/BreadcrumbReducer';

export const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children = null }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <BreadcrumbContext.Provider value={value}>{children}</BreadcrumbContext.Provider>;
};
