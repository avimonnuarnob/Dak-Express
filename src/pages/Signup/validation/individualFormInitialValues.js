const businessFormInitialValues = {
	businessName: '',
	website: '',
	districtOrState: '',
	cityOrTown: '',
	postcodeOrPostalcode: '',
	address: '',
};

const personalFormInitialValues = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	role: '',
	nid: '',
	password: '',
	confirmPassword: '',
	terms: false,
};

const initialValues = [businessFormInitialValues, personalFormInitialValues];

export default initialValues;
