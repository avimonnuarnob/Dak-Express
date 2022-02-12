// eslint-disable-next-line no-useless-escape
const websiteRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
// const tradeLicenceRegex = /\d{12}/;
const postcodeOrPostalcodeRegex = /(?!([089])\1{4})\d{4}/;

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;
// eslint-disable-next-line no-useless-escape
const phoneRegex = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
const nidRegex = /^([0-9]{9})(X|V)$|^([0-9]{11})/;

const validateBusinessInfo = (values) => {
	const errors = {};

	if (!values?.businessName) {
		errors.businessName = 'Business name is required';
	} else if (values?.businessName?.length <= 3) {
		errors.businessName = 'Business name must be a minimum of 3 characters';
	} else if (values?.businessName?.length >= 100) {
		errors.businessName = 'Business name can not be a maximum of 100 characters';
	}

	if (!values?.website) {
		errors.website = 'Website or Social is required';
	} else if (!websiteRegex.test(values?.website)) {
		errors.website = 'Invalid Website URL';
	}

	if (!values?.tradeLicence) {
		errors.tradeLicence = 'Trande Licence File is required';
	}
	// else if (!tradeLicenceRegex.test(values?.tradeLicence)) {
	// 	errors.tradeLicence = 'Invalid Trande Licence Number';
	// }

	if (!values?.districtOrState) {
		errors.districtOrState = 'District or State is required';
	} else if (values?.districtOrState?.length <= 3) {
		errors.districtOrState = 'District or State must be a minimum of 3 characters';
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

const validatePersonalInfo = (values) => {
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

const validation = [validateBusinessInfo, validatePersonalInfo];

export default validation;
