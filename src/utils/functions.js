export const convertStringToKebabCase = (string = '') => {
	if (string.length === 0) {
		return '';
	}

	return string.toLocaleLowerCase().split(' ').join('-');
};
