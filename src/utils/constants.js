export const numberOfRowsPerPage = [25, 50, 75, 100];

const arrayOfDistricts = {
	Barisal: ['Barguna', 'Barisal', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur'],
	Chittagong: [
		'Bandarban',
		'Brahmanbaria',
		'Chandpur',
		'Chittagong',
		'Comilla',
		"Cox's Bazar",
		'Feni',
		'Khagrachhari',
		'Lakshmipur',
		'Noakhali',
		'Rangamati',
	],
	Dhaka: [
		'Dhaka',
		'Faridpur',
		'Gazipur',
		'Gopalganj',
		'Kishoreganj',
		'Madaripur',
		'Manikganj',
		'Munshiganj',
		'Narayanganj',
		'Narsingdi',
		'Rajbari',
		'Shariatpur',
		'Tangail',
	],
	Khulna: [
		'Bagerhat',
		'Chuadanga',
		'Jessore',
		'Jhenaidah',
		'Khulna',
		'Kushtia',
		'Magura',
		'Meherpur',
		'Narail',
		'Satkhira',
	],
	Mymensingh: ['Jamalpur', 'Mymensingh', 'Netrakona', 'Sherpur'],
	Rajshahi: ['Bogra', 'Chapainawabganj', 'Joypurhat', 'Naogaon', 'Natore', 'Pabna', 'Rajshahi', 'Sirajganj'],
	Rangpur: ['Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon'],
	Sylhet: ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
};

const districts = [];
const cities = [];

// eslint-disable-next-line array-callback-return
Object.keys(arrayOfDistricts).map((district, divisionIndex) => {
	districts.push({
		id: divisionIndex,
		label: district,
		value: district.toLowerCase(),
	});

	arrayOfDistricts[district].forEach((dist, distIndex) =>
		cities.push({
			id: `${divisionIndex}${distIndex}-${dist}`,
			label: dist,
			value: dist.toLowerCase(),
		})
	);
});

export { districts, cities };
