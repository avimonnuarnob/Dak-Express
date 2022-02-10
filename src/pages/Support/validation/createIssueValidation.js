// eslint-disable-next-line no-useless-escape
/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
const phoneRegex =
	/([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const validateCreateIssueForm = (values) => {
	const errors = {};

	if (!values?.fullName) {
		errors.fullName = 'Full name is required';
	}

	if (!values?.phone) {
		errors.phone = 'Phone number is required';
	} else if (values?.phone && !phoneRegex.test(values?.phone)) {
		errors.phone = 'Invalid phone number';
	}

	if (!values?.email) {
		errors.email = 'Email address is required';
	} else if (values?.email && !emailRegex.test(values?.email)) {
		errors.phone = 'Invalid email address';
	}

	// if (!values?.attachment) {
	// 	errors.file = 'File is required';
	// }
	return errors;
};

export default validateCreateIssueForm;
