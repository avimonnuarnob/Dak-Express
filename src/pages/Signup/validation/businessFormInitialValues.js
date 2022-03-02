const businessFormInitialValues = {
	businessName: '',
	website: '',
	tradeLicence: null,
	district: '',
	city: '',
	zipcode: '',
	address: '',
};

const personalFormInitialValues = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	role: '',
	nidNo: '',
	password: '',
	confirmPassword: '',
	terms: false,
};

const initialValues = [businessFormInitialValues, personalFormInitialValues];

export default initialValues;
