/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const usernameRegex = /^[a-zA-Z0-9]+$/;

// const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

const validate = (values) => {
	const errors = {};

	if (!values?.email) {
		errors.email = 'Email is required';
	} else if (values?.email.includes('@') && !emailRegex.test(values?.email)) {
		errors.email = 'Invalid email address';
	} else if (
		!values?.email.includes('@') &&
		!usernameRegex.test(values?.email)
	) {
		errors.email = 'Invalid username';
	} else if (values?.email?.length < 3) {
		errors.email = 'Username must be a minimum of 3 characters';
	}

	if (!values?.password) {
		errors.password = 'Password is required';
	} else if (values?.password?.length < 6) {
		errors.password = `Password must be a minimum of 6 characters`;
	}

	return errors;
};

export default validate;
