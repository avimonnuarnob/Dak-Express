/* eslint-disable no-param-reassign */

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const validate = (values) => {
	const errors = {};

	if (!values?.email) {
		errors.email = 'Email is required';
	} else if (!emailRegex.test(values?.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

export default validate;
