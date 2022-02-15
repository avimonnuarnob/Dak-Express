/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import PhoneNumberInputField from '../../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../../components/modecules/SelectInputField';
import TextInputField from '../../../../components/modecules/TextInputField';
import { sleep } from '../../../../utils/functions';
import validateAddPickupLocation from '../validation/AddpickupLocationValidation';
import AddPickupLocationInitialValues from '../validation/AddPickupLocationValues';

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

const useStyles = makeStyles((theme) => ({
	pickup: {},
	form: {},
	form__header: {
		marginBottom: theme.spacing(3),
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
	},
	pickup__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	pickup__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	pickup__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const AddPickupLocationForm = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const submitForm = async (values, actions) => {
		await sleep(2000);
		console.log(JSON.stringify(values, null, 2));

		actions.setSubmitting(false);
	};

	const handleSubmit = (values, actions) => {
		submitForm(values, actions);
	};

	return (
		<Formik
			initialValues={AddPickupLocationInitialValues}
			validate={validateAddPickupLocation}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Paper sx={{ py: 4, px: 6, mt: 3 }}>
						<Box className={classes.form__header}>
							<Typography
								fontSize="24px"
								fontWeight="bold"
								sx={{ color: 'status.pending', mb: 3 }}
							>
								Pickup Location
							</Typography>
						</Box>

						<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
							<Grid container spacing={2}>
								<Grid item md={6} sm={6} xs={12}>
									<TextInputField
										fullWidth
										isRequired
										label="First Name"
										name="firstName"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<TextInputField
										fullWidth
										isRequired
										label="Last Name"
										name="lastName"
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<TextInputField
										fullWidth
										isRequired
										label="Business Name"
										name="businessName"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<PhoneNumberInputField
										fullWidth
										isRequired
										label="Phone"
										name="phone"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectInputField
										items={distItems}
										fullWidth
										isRequired
										label="District / State"
										name="districtOrState"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectInputField
										items={distItems}
										fullWidth
										isRequired
										label="City / Town"
										name="cityOrTown"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<TextInputField
										fullWidth
										isRequired
										label="Post Code / Postal Code"
										name="postcodeOrPostalcode"
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<TextInputField
										fullWidth
										isRequired
										label="Address"
										name="address"
									/>
								</Grid>
							</Grid>
						</fieldset>
					</Paper>

					<div className={classes.pickup__actions}>
						<Button
							type="button"
							variant="outlined"
							disabled={false}
							onClick={() => navigate(-1)}
							sx={{ ml: 'auto !important' }}
							className={classes.pickup__back__button}
						>
							Cancel
						</Button>

						<Button
							disabled={false}
							type="submit"
							variant="contained"
							className={classes.pickup__button}
						>
							Submit
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AddPickupLocationForm;
