import { createContext, useReducer } from 'react';
import { initialState, loadingReducer } from '../reducers/LoadingReducer';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children = null }) => {
	const [state, dispatch] = useReducer(loadingReducer, initialState);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = { state, dispatch };

	return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};
