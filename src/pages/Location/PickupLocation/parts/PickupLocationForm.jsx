import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useEffect, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import PhoneNumberInputField from '../../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../../components/modecules/SelectInputField';
import TextInputField from '../../../../components/modecules/TextInputField';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../../../reducers/LoadingReducer';
import { sleep } from '../../../../utils/functions';
import validateAddPickupLocation from '../validation/AddpickupLocationValidation';
import AddPickupLocationInitialValues from '../validation/AddPickupLocationValues';

const allDistrictArray = [];

const distDivArray = {
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

Object.keys(distDivArray).map((divison, divisionIndex) =>
	distDivArray[divison].forEach((dist, distIndex) =>
		allDistrictArray.push({
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
	'pickup__button--back': {
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

const AddPickupLocationForm = ({ isEditable }) => {
	const { t } = useTranslation();
	const [pickupLocationInitialValues, setPickupLocationInitialValues] = useState(AddPickupLocationInitialValues);
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const navigateTo = useNavigate();
	const classes = useStyles();

	const getData = async () => {
		if (localStorage.getItem('pickupData'))
			setPickupLocationInitialValues(JSON.parse(localStorage.getItem('pickupData')));
	};

	useEffect(() => {
		if (isEditable) {
			getData();
		}
	}, [isEditable]);

	const submitForm = async (values, actions) => {
		try {
			dispatch(startLoading());
			sleep(5000).then(() => {
				localStorage.setItem('pickupData', JSON.stringify(values));
				dispatch(stopLoading());
				navigateTo(-1);
			});
		} catch (e) {
			console.log(e);
		}
		actions.setSubmitting(false);
	};

	const handleSubmit = (values, actions) => {
		submitForm(values, actions);
	};

	return (
		<Formik
			initialValues={pickupLocationInitialValues}
			validate={validateAddPickupLocation}
			onSubmit={handleSubmit}
			enableReinitialize
		>
			{({ isSubmitting }) => (
				<Form>
					<Paper sx={{ py: 4, px: 6, mt: 3 }}>
						<Box className={classes.form__header}>
							<Typography fontSize="24px" fontWeight="bold" sx={{ color: 'status.pending', mb: 3 }}>
								{t('pickup-location-details')}
							</Typography>
						</Box>

						<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
							<Grid container spacing={2}>
								<Grid item md={6} sm={6} xs={12}>
									<TextInputField fullWidth isRequired label={t('first-name')} name="firstName" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<TextInputField fullWidth isRequired label={t('last-name')} name="lastName" />
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<TextInputField fullWidth isRequired label={t('business-name')} name="businessName" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<PhoneNumberInputField fullWidth isRequired label={t('phone')} name="phone" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectInputField
										items={allDistrictArray}
										fullWidth
										isRequired
										label={t('district-state')}
										name="districtOrState"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectInputField
										items={allDistrictArray}
										fullWidth
										isRequired
										label={t('city-town')}
										name="cityOrTown"
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<TextInputField fullWidth isRequired label={t('post-code')} name="postcodeOrPostalcode" />
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<TextInputField fullWidth isRequired label={t('address')} name="address" />
								</Grid>
							</Grid>
						</fieldset>
					</Paper>

					<div className={classes.pickup__actions}>
						<Button
							type="button"
							variant="outlined"
							disabled={false}
							onClick={() => navigateTo(-1)}
							sx={{ ml: 'auto !important' }}
							className={classes['pickup__button--back']}
						>
							{t('cancel')}
						</Button>

						<Button
							type="submit"
							variant="contained"
							disabled={loading}
							endIcon={loading && <CircularProgress size={20} color="inherit" />}
							className={classes.pickup__button}
						>
							{loading ? t('submitting') : t('submit')}
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

AddPickupLocationForm.propTypes = {
	isEditable: PropTypes.bool,
};

AddPickupLocationForm.defaultProps = {
	isEditable: false,
};

export default AddPickupLocationForm;
