import { useCallback, useEffect, useReducer, useState } from 'react';
import useError from '../hooks/useError';
import { removeError } from '../reducers/ErrorReducer';
import { initialState, loadingReducer, startLoading, stopLoading } from '../reducers/LoadingReducer';
import { catchAllErrors } from '../utils/serializeErrors';
import axiosApiInstance from './axiosApiInstance';

const useGetApiData = ({ url }) => {
	const [data, setData] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	// eslint-disable-next-line no-unused-vars
	const { state: errorState, dispatch: errorDispatch } = useError();

	const fetchData = useCallback(async () => {
		try {
			errorDispatch(removeError());
			dispatch(startLoading());

			const response = await axiosApiInstance.get(url);

			if ([200, 201].includes(response?.status)) {
				if (response?.data?.results) {
					setData(response.data.results);
				} else setData(response.data);
			}
		} catch (error) {
			catchAllErrors(errorDispatch, error);
		} finally {
			dispatch(stopLoading());
		}
	}, [errorDispatch, url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, loading };
};

export default useGetApiData;
