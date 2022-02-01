/* eslint-disable no-param-reassign */
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

const validate = (values) => {
	const errors = {};

	if (!values?.password) {
		errors.password = 'Password is required';
	} else if (!passwordRegex.test(values?.password)) {
		errors.password = `Password must be a minimum of 8 characters including number, Upper, Lower And 
		one special character`;
	}

	if (!values?.confirmPassword) {
		errors.confirmPassword = 'Confirm Password is required';
	} else if (!passwordRegex.test(values?.confirmPassword)) {
		errors.confirmPassword = `Confirm Password must be a minimum of 8 characters including number, Upper, Lower And 
		one special character`;
	}

	if (values?.password && values?.confirmPassword && values?.password !== values?.confirmPassword) {
		errors.confirmPassword = 'Password does not matched';
	}

	return errors;
};

export default validate;
