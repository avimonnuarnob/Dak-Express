// eslint-disable-next-line no-useless-escape
/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
const postcodeOrPostalcodeRegex = /(?!([089])\1{4})\d{4}/;
const phoneRegex =
	/([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

const validateAddPickupLocation = (values) => {
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

	if (!values?.businessName) {
		errors.businessName = 'Business name is required';
	} else if (values?.businessName?.length <= 3) {
		errors.businessName = 'Business name must be a minimum of 3 characters';
	} else if (values?.businessName?.length >= 100) {
		errors.businessName = 'Business name can be a maximum of 100 characters';
	}

	if (!values?.districtOrState) {
		errors.districtOrState = 'District or State is required';
	} else if (values?.districtOrState?.length <= 3) {
		errors.districtOrState =
			'District or State must be a minimum of 3 characters';
	}

	if (!values?.cityOrTown) {
		errors.cityOrTown = 'City or Town is required';
	} else if (values?.cityOrTown?.length <= 3) {
		errors.cityOrTown = 'City or Town must be a minimum of 3 characters';
	}

	if (!values?.postcodeOrPostalcode) {
		errors.postcodeOrPostalcode = 'Post or Postal Code is required';
	} else if (!postcodeOrPostalcodeRegex.test(values?.postcodeOrPostalcode)) {
		errors.postcodeOrPostalcode = 'Invalid Post or Postal Code';
	}

	if (!values?.address) {
		errors.address = 'Address is required';
	} else if (values?.address?.length <= 3) {
		errors.address = 'Address must be a minimum of 3 characters';
	} else if (values?.address?.length >= 255) {
		errors.address = 'Address can be a maximum of 255 characters';
	}

	return errors;
};

export default validateAddPickupLocation;
