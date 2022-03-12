import { useCallback } from 'react';
import useError from '../hooks/useError';
import useLoading from '../hooks/useLoading';
import { removeError } from '../reducers/ErrorReducer';
import { startLoading, stopLoading } from '../reducers/LoadingReducer';
import { catchAllErrors } from '../utils/serializeErrors';
import axiosApiInstance from './axiosApiInstance';

const useAxios = () => {
	// const [loading, dispatch] = useReducer(loadingReducer, initialState);

	const { state: loading, dispatch: loadingDispatcher } = useLoading();
	const { state: error, dispatch: errorDispatcher } = useError();

	const requestToServerWith = useCallback(
		// eslint-disable-next-line consistent-return
		async (options) => {
			try {
				errorDispatcher(removeError());
				loadingDispatcher(startLoading());

				const result = await axiosApiInstance.request(options); // https://axios-http.com/docs/req_config
				return result;
				// eslint-disable-next-line no-shadow
			} catch (error) {
				catchAllErrors(errorDispatcher, error);
			} finally {
				loadingDispatcher(stopLoading());
			}
		},
		[errorDispatcher, loadingDispatcher]
	);

	// const stopLoading = dispatch(stopLoading());

	console.log(loading);

	return { error, loading, requestToServerWith };
};

export default useAxios;
