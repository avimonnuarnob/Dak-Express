// eslint-disable-next-line no-unused-vars
const phoneRegex = /([0-9\s-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
// eslint-disable-next-line no-unused-vars
const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const validateCreateIssueForm = (values) => {
	const errors = {};

	if (!values?.firstName) {
		errors.firstName = 'First name is required';
	}

	if (!values?.lastName) {
		errors.lastName = 'Last name is required';
	}

	if (!values?.subject) {
		errors.subject = 'Subject is required';
	}

	if (!values?.message) {
		errors.message = 'Message is required';
	}

	if (!values?.shipmentCode) {
		errors.message = 'Shipment Code is required';
	}

	// if (!values?.phone) {
	// 	errors.phone = 'Phone number is required';
	// } else if (values?.phone && !phoneRegex.test(values?.phone)) {
	// 	errors.phone = 'Invalid phone number';
	// }

	// if (!values?.email) {
	// 	errors.email = 'Email address is required';
	// } else if (values?.email && !emailRegex.test(values?.email)) {
	// 	errors.phone = 'Invalid email address';
	// }

	// if (!values?.attachment) {
	// 	errors.file = 'File is required';
	// }
	return errors;
};

export default validateCreateIssueForm;
