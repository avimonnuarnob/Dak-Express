import axios from 'axios';

const axiosBasicInstance = axios.create({
	baseURL: 'http://18.142.117.203:8000/api/v1',
	timeout: 5000,
	headers: {
		'Accept-Language': 'en',
		'Accept-Code': 'BD',
	},
});

export default axiosBasicInstance;
