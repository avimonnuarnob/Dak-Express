export const convertStringToKebabCase = (string = '') => {
	if (string.length === 0) {
		return '';
	}

	return string.toLocaleLowerCase().split(' ').join('-');
};

// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
