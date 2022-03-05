import { useReducer } from 'react';
import useError from '../hooks/useError';
import { removeError } from '../reducers/ErrorReducer';
import { initialState, loadingReducer, startLoading, stopLoading } from '../reducers/LoadingReducer';
import { catchAllErrors } from '../utils/serializeErrors';
import axiosApiInstance from './axiosApiInstance';

const useAxios = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const { state: error, dispatch: errorDispatcher } = useError();

	// eslint-disable-next-line consistent-return
	const requestToServerWith = async (options) => {
		try {
			errorDispatcher(removeError());
			dispatch(startLoading());

			const result = await axiosApiInstance.request(options); // https://axios-http.com/docs/req_config
			return result;
			// eslint-disable-next-line no-shadow
		} catch (error) {
			catchAllErrors(errorDispatcher, error);
		} finally {
			dispatch(stopLoading());
		}
	};

	// const stopLoading = dispatch(stopLoading());

	return { error, loading, requestToServerWith };
};

export default useAxios;
