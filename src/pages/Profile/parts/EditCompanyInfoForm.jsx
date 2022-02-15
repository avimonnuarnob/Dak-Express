/* eslint-disable prettier/prettier */
import { Box, Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import TextInputField from '../../../components/modecules/TextInputField';
import SelectInputField from '../../../components/modecules/SelectInputField';

const distItems = [];

const distDivArray = {
	Barisal: [
		'Barguna',
		'Barisal',
		'Bhola',
		'Jhalokati',
		'Patuakhali',
		'Pirojpur',
	],
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
	Rajshahi: [
		'Bogra',
		'Chapainawabganj',
		'Joypurhat',
		'Naogaon',
		'Natore',
		'Pabna',
		'Rajshahi',
		'Sirajganj',
	],
	Rangpur: [
		'Dinajpur',
		'Gaibandha',
		'Kurigram',
		'Lalmonirhat',
		'Nilphamari',
		'Panchagarh',
		'Rangpur',
		'Thakurgaon',
	],
	Sylhet: ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
};

Object.keys(distDivArray).map((divison, divisionIndex) =>
	distDivArray[divison].forEach((dist, distIndex) =>
		distItems.push({
			id: `${divisionIndex}${distIndex}-${dist}`,
			label: dist,
			value: dist.toLowerCase(),
		})
	)
);

console.log(distItems);

const EditCompanyInfoForm = () => {
	const { isSubmitting, values, handleBlur, handleChange, touched, errors } =
		useFormikContext();

	return (
		<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label="Business Name"
						name="businessName"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						label="Website or Fb Url"
						name="url"
						boxStyles={{ paddingTop: '10px' }}
						value={values.url}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.url && Boolean(errors.url)}
						helperText={touched.url && errors.url}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<Box sx={{ paddingTop: '10px' }}>
						<TextInputField
							fullWidth
							isRequired
							label="Trade License"
							name="trade"
						/>
					</Box>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<SelectInputField
						fullWidth
						isRequired
						items={distItems}
						label="District / State"
						name="districtOrState"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<SelectInputField
						fullWidth
						isRequired
						items={distItems}
						label="City / Town"
						name="cityOrTown"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label="Post Code / Postal Code"
						name="postcodeOrPostalcode"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<TextInputField
						multiline
						minRows={3}
						fullWidth
						isRequired
						label="Address"
						name="address"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default EditCompanyInfoForm;
