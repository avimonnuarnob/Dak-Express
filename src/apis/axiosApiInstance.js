/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosApiInstance = axios.create({
	// TODO: create an config file according to API
});

axiosApiInstance.interceptors.request.use(
	async (config) => {
		// TODO: get and set the access_token

		config.headers = {
			Authorization: `Bearer ${'access_token123'}`,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

axiosApiInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;

			// TODO: Apply refresh token mechanism token here

			axios.defaults.headers.common.Authorization = `Bearer ${'access_token123'}`;
			return axiosApiInstance(originalRequest);
		}
		return Promise.reject(error);
	}
);

export default axiosApiInstance;
