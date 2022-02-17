/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import isEmpty from '../../../utils/isEmpty';

const validate = (values) => {
	const errors = { products: [] };

	if (values?.products?.length > 0) {
		values?.products?.forEach((product) => {
			const error = {};

			if (!product?.productTitle) {
				error.productTitle = 'Product Name or Title is required';
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
