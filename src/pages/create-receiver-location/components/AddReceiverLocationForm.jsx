/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import InputElement from '../../../components/modecules/InputElement';
import PhoneNumberInput from '../../../components/modecules/PhoneNumberInput';
import SelectElement from '../../../components/modecules/SelectInput';
import { sleep } from '../../../utils/functions';
import validateAddPickupLocation from '../validation/AddReceiverLocationValidation';
import AddPickupLocationInitialValues from '../validation/AddReceiverLocationValues';

const roleItems = [
	{ id: 1, label: 'Admin', value: 'admin' },
	{ id: 2, label: 'Super Admin', value: 'super admin' },
];

const useStyles = makeStyles((theme) => ({
	receiver: {},
	receiver__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	receiver__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	receiver__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const AddReceiverLocationForm = () => {
	const classes = useStyles();

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
			{({
				isSubmitting,
				values,
				errors,
				handleChange,
				handleBlur,
				touched,
				setFieldValue,
			}) => (
				<Form>
					<Paper
						sx={{
							py: 4,
							px: 6,
							mt: 3,
						}}
					>
						<Box
							sx={{
								mb: 3,
								display: 'flex',
								borderBottom: (theme) =>
									`1px solid ${theme.palette.secondary.main}`,
							}}
						>
							<Typography
								fontSize="24px"
								fontWeight="bold"
								sx={{
									color: 'status.pending',
									mb: 3,
								}}
							>
								Receiver Location
							</Typography>
						</Box>

						<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
							<Grid container spacing={2}>
								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="First Name"
										name="firstName"
										boxStyles={{ paddingTop: '10px' }}
										value={values.firstName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.firstName && Boolean(errors.firstName)}
										helperText={touched.firstName && errors.firstName}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Last Name"
										name="lastName"
										boxStyles={{ paddingTop: '10px' }}
										value={values.lastName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.lastName && Boolean(errors.lastName)}
										helperText={touched.lastName && errors.lastName}
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Business Name"
										name="businessName"
										boxStyles={{ paddingTop: '10px' }}
										value={values.businessName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.businessName && Boolean(errors.businessName)}
										helperText={touched.businessName && errors.businessName}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<Box sx={{ paddingTop: '10px' }}>
										<PhoneNumberInput
											fullWidth
											isRequired
											label="Mobile Number"
											name="phone"
											value={values.phone}
											handleChange={handleChange}
											handleBlur={handleBlur}
											error={touched.phone && Boolean(errors.phone)}
											helperText={touched.phone && errors.phone}
											setFieldValue={setFieldValue}
										/>
									</Box>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectElement
										fullWidth
										isRequired
										items={roleItems}
										label="District / State"
										name="districtOrState"
										boxStyles={{ paddingTop: '10px' }}
										value={values.districtOrState}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.districtOrState && Boolean(errors.districtOrState)
										}
										helperText={
											touched.districtOrState && errors.districtOrState
										}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectElement
										fullWidth
										isRequired
										items={roleItems}
										label="City / Town"
										name="cityOrTown"
										boxStyles={{ paddingTop: '10px' }}
										value={values.cityOrTown}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.cityOrTown && Boolean(errors.cityOrTown)}
										helperText={touched.cityOrTown && errors.cityOrTown}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Post Code / Postal Code"
										name="postcodeOrPostalcode"
										boxStyles={{ paddingTop: '10px' }}
										value={values.postcodeOrPostalcode}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.postcodeOrPostalcode &&
											Boolean(errors.postcodeOrPostalcode)
										}
										helperText={
											touched.postcodeOrPostalcode &&
											errors.postcodeOrPostalcode
										}
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Address"
										name="address"
										boxStyles={{ paddingTop: '10px' }}
										value={values.address}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.address && Boolean(errors.address)}
										helperText={touched.address && errors.address}
									/>
								</Grid>
							</Grid>
						</fieldset>
					</Paper>
					<div className={classes.receiver__actions}>
						<Button
							type="button"
							variant="outlined"
							disabled={false}
							onClick={() => {}}
							sx={{ ml: 'auto !important' }}
							className={classes.receiver__back__button}
						>
							Back
						</Button>

						<Button
							disabled={false}
							type="submit"
							variant="contained"
							className={classes.receiver__button}
						>
							Submit
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AddReceiverLocationForm;
