/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

const phoneRegex = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

const nidRegex = /^([0-9]{9})(X|V)$|^([0-9]{11})/;

const validate = (values) => {
	const errors = {};

	if (!values?.firstName) {
		errors.firstName = 'First name is required';
	} else if (values?.firstName?.length <= 3) {
		errors.firstName = 'First name must be a minimum of 3 characters';
	}

	if (!values?.lastName) {
		errors.lastName = 'Last name is required';
	} else if (values?.lastName?.length <= 3) {
		errors.lastName = 'Last name must be a minimum of 3 characters';
	}

	if (!values?.phone) {
		errors.phone = 'Phone number is required';
	} else if (values?.phone && !phoneRegex.test(values?.phone)) {
		errors.phone = 'Invalid phone number';
	}

	if (!values?.email) {
		errors.email = 'Email is required';
	} else if (values?.email.includes('@') && !emailRegex.test(values?.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values?.role) {
		errors.role = 'Role is required';
	}

	if (!values?.nid) {
		errors.nid = 'NID is required';
	} else if (!nidRegex.test(parseInt(values?.nid, 10))) {
		errors.nid = 'Invalid NID number';
	}

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
