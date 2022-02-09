const initialValues = {
	type: 'Send',
	pickup: {
		firstName: '',
		lastName: '',
		businessName: '',
		phone: '',
		district: '',
		city: '',
		zipcode: '',
		address: '',
		pickupDate: null,
		pickupTime: null,
		save: false,
	},
	receiver: {
		type: 'Personal',
		firstName: '',
		lastName: '',
		businessName: '',
		phone: '',
		district: '',
		city: '',
		zipcode: '',
		address: '',
		save: false,
	},
	products: [
		{
			productTitle: '',
			unitType: '',
			weight: '',
			quantity: '',
			height: '',
			width: '',
			length: '',
		},
	],
	message: '',
	noDangerousGoods: false,
};

export default initialValues;
