/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import isEmpty from '../../../utils/isEmpty';

// eslint-disable-next-line no-useless-escape
const postcodeOrPostalcodeRegex = /(?!([089])\1{4})\d{4}/;
// eslint-disable-next-line no-useless-escape
const phoneRegex = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

const validate = (values) => {
	const errors = {
		// type: 'Send',
		pickup: {},
		receiver: {},
		products: [],
		// message: '',
		// noDangerousGoods: false,
	};

	// Pickup Location Validation
	if (!values?.pickup?.firstName) {
		errors.pickup.firstName = 'First Name is required';
	} else if (values?.pickup?.firstName?.length <= 3) {
		errors.pickup.firstName = 'First Name must be a minimum of 3 characters';
	} else if (values?.pickup?.firstName?.length >= 100) {
		errors.pickup.firstName = 'First Name can not be a maximum of 100 characters';
	}

	if (!values?.pickup?.lastName) {
		errors.pickup.lastName = 'Last Name is required';
	} else if (values?.pickup?.lastName?.length <= 3) {
		errors.pickup.lastName = 'Last Name must be a minimum of 3 characters';
	} else if (values?.pickup?.lastName?.length >= 100) {
		errors.pickup.lastName = 'Last Name can not be a maximum of 100 characters';
	}

	if (!values?.pickup?.businessName) {
		errors.pickup.businessName = 'Business Name is required';
	} else if (values?.pickup?.businessName?.length <= 3) {
		errors.pickup.businessName = 'Business Name must be a minimum of 3 characters';
	} else if (values?.pickup?.businessName?.length >= 100) {
		errors.pickup.businessName = 'Business Name can not be a maximum of 100 characters';
	}

	if (!values?.pickup?.phone) {
		errors.pickup.phone = 'Phone number is required';
	} else if (values?.pickup?.phone && !phoneRegex.test(values?.pickup?.phone)) {
		errors.pickup.phone = 'Invalid phone number';
	}

	if (!values?.pickup?.district) {
		errors.pickup.district = 'District or State is required';
	} else if (values?.pickup?.district?.length <= 3) {
		errors.pickup.district = 'District or State must be a minimum of 3 characters';
	}

	if (!values?.pickup?.city) {
		errors.pickup.city = 'City or Town is required';
	} else if (values?.pickup?.city?.length <= 3) {
		errors.pickup.city = 'City or Town must be a minimum of 3 characters';
	}

	if (!values?.pickup?.zipcode) {
		errors.pickup.zipcode = 'Zip or Post Code is required';
	} else if (!postcodeOrPostalcodeRegex.test(values?.pickup?.zipcode)) {
		errors.pickup.zipcode = 'Invalid Zip or Post Code';
	}

	if (!values?.pickup?.address) {
		errors.pickup.address = 'Address is required';
	} else if (values?.pickup?.address?.length <= 3) {
		errors.pickup.address = 'Address must be a minimum of 3 characters';
	} else if (values?.pickup?.address?.length >= 255) {
		errors.pickup.address = 'Address can not be a maximum of 255 characters';
	}

	if (!values?.receiver?.firstName) {
		errors.receiver.firstName = 'First Name is required';
	} else if (values?.receiver?.firstName?.length <= 3) {
		errors.receiver.firstName = 'First Name must be a minimum of 3 characters';
	} else if (values?.receiver?.firstName?.length >= 100) {
		errors.receiver.firstName = 'First Name can not be a maximum of 100 characters';
	}

	if (!values?.receiver?.lastName) {
		errors.receiver.lastName = 'Last Name is required';
	} else if (values?.receiver?.lastName?.length <= 3) {
		errors.receiver.lastName = 'Last Name must be a minimum of 3 characters';
	} else if (values?.receiver?.lastName?.length >= 100) {
		errors.receiver.lastName = 'Last Name can not be a maximum of 100 characters';
	}

	if (values?.receiver?.type === 'Business') {
		if (!values?.receiver?.businessName) {
			errors.receiver.businessName = 'Business Name is required';
		} else if (values?.receiver?.businessName?.length <= 3) {
			errors.receiver.businessName = 'Business Name must be a minimum of 3 characters';
		} else if (values?.receiver?.businessName?.length >= 100) {
			errors.receiver.businessName = 'Business Name can not be a maximum of 100 characters';
		}
	}

	if (!values?.receiver?.phone) {
		errors.receiver.phone = 'Phone number is required';
	} else if (values?.receiver?.phone && !phoneRegex.test(values?.receiver?.phone)) {
		errors.receiver.phone = 'Invalid phone number';
	}

	if (!values?.receiver?.district) {
		errors.receiver.district = 'District or State is required';
	} else if (values?.receiver?.district?.length <= 3) {
		errors.receiver.district = 'District or State must be a minimum of 3 characters';
	}

	if (!values?.receiver?.city) {
		errors.receiver.city = 'City or Town is required';
	} else if (values?.receiver?.city?.length <= 3) {
		errors.receiver.city = 'City or Town must be a minimum of 3 characters';
	}

	if (!values?.receiver?.zipcode) {
		errors.receiver.zipcode = 'Zip or Post Code is required';
	} else if (!postcodeOrPostalcodeRegex.test(values?.receiver?.zipcode)) {
		errors.receiver.zipcode = 'Invalid Zip or Post Code';
	}

	if (!values?.receiver?.address) {
		errors.receiver.address = 'Address is required';
	} else if (values?.receiver?.address?.length <= 3) {
		errors.receiver.address = 'Address must be a minimum of 3 characters';
	} else if (values?.receiver?.address?.length >= 255) {
		errors.receiver.address = 'Address can not be a maximum of 255 characters';
	}

	if (values?.products?.length > 0) {
		values?.products?.forEach((product) => {
			const error = {};

			if (!product?.productTitle) {
				error.productTitle = 'Product Name is required';
			}

			if (!product?.unitType) {
				error.unitType = 'Product Unit Type is required';
			}

			if (!product?.weight) {
				error.weight = 'Product Weight is required';
			}

			if (!product?.quantity) {
				error.quantity = 'Product Quantity is required';
			}

			errors.products.push(error);
		});
	}

	for (const field in errors) {
		if (isEmpty(errors[field])) {
			delete errors[field];
		}

		if (Array.isArray(errors[field])) {
			const isEmptyArray = errors[field].filter((element) => {
				if (Object.keys(element).length !== 0) {
					return true;
				}

				return false;
			});

			if (isEmpty(isEmptyArray)) {
				delete errors[field];
			}
		}
	}

	return errors;
};

export default validate;
