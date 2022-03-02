/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosApiInstance = axios.create({
	baseURL: 'http://18.142.117.203:8000/api/v1',
	timeout: 5000,
	headers: {
		'Accept-Language': 'en',
		'Accept-Code': 'BD',
	},
});

axiosApiInstance.interceptors.request.use(
	async (config) => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken) {
			config.headers = {
				Authorization: `Bearer ${accessToken}`,
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};
		}

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

		if ([401, 403].includes(error?.response?.status) && !originalRequest._retry) {
			originalRequest._retry = true;

			// TODO: Apply refresh token mechanism token here
			console.log('Need to work on refresh token!!!');
			// const accessToken = localStorage.getItem('accessToken');
			// axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

			return axiosApiInstance(originalRequest);
		}

		return Promise.reject(error);
	}
);

export default axiosApiInstance;
