/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../../components/modecules/AlertModal';
import { sleep } from '../../utils/functions';
import BusinessInfoForm from './parts/BusinessInfoForm';
import PersonalInfoForm from './parts/PersonalnfoForm';
import initialValues from './validation/businessFormInitialValues';
import validation from './validation/businessFormValidation';

const useStyles = makeStyles((theme) => ({
	icon: {
		fill: `${theme.palette.secondary.main} !important`,
	},
	color: {
		color: `${theme.palette.secondary.main} !important`,
	},
	signup: {
		padding: '25px',
		textAlign: 'center',
		color: theme.palette.text.secondary,
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: `67%`,
		[theme.breakpoints.down('md')]: {
			width: `100%`,
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '64px!important',
			width: `100%`,
		},
	},
	signup__header: {
		fontWeight: 'bolder !important',
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	signup__text: {
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	signup__rememberme: {
		color: `${theme.palette.secondary.main} !important`,
	},
	signup__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
	},
	signup__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	signup__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
	signup__actions: {
		margin: '0 auto !important',
	},
}));

const steps = ['Business Info', 'Contact Person Info'];

const BusinessSignup = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [successModal, setSuccessModal] = useState(false);

	const classes = useStyles();

	const validationRules = validation[activeStep];
	const initialValue = initialValues[activeStep];

	const isLastStep = activeStep === steps.length - 1;

	const handleBack = (setFieldValue) => {
		if (typeof setFieldValue === 'function') {
			setFieldValue('tradeLicence', null);
		}

		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const submitForm = async (values, actions) => {
		await sleep(2000);
		console.log(JSON.stringify(values, null, 2));

		setSuccessModal(true);
		actions.setSubmitting(false);
	};

	const handleSubmit = (values, actions) => {
		if (isLastStep) {
			submitForm(values, actions);
		} else {
			setActiveStep((currentStep) => currentStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	};

	return (
		<>
			<Paper elevation={3} className={classes.signup}>
				<Typography variant="h4" className={classes.signup__header}>
					Let's Get Started With
				</Typography>

				<Typography variant="h6" className={classes.signup__header}>
					Business
				</Typography>

				<Typography variant="body2" className={classes.signup__text}>
					Please provide the following informations.
				</Typography>

				<Box sx={{ width: '100%' }}>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => {
							const stepProps = {};
							const labelProps = {};

							return (
								<Step key={label} {...stepProps}>
									<StepLabel
										{...labelProps}
										// eslint-disable-next-line prettier/prettier
										StepIconProps={{ classes: { active: classes.icon, completed: classes.icon, text: classes.text } }}
									>
										{label}
									</StepLabel>
								</Step>
							);
						})}
					</Stepper>

					{activeStep === steps.length ? null : (
						<Formik initialValues={initialValue} validate={validationRules} onSubmit={handleSubmit}>
							{({ isSubmitting, values, errors, handleChange, handleBlur, touched, setFieldValue }) => (
								<Form>
									{activeStep === 0 && (
										<BusinessInfoForm
											initialValues={initialValue}
											values={values}
											errors={errors}
											handleChange={handleChange}
											handleBlur={handleBlur}
											touched={touched}
											isSubmitting={isSubmitting}
											setFieldValue={setFieldValue}
										/>
									)}

									{activeStep === 1 && (
										<PersonalInfoForm
											initialValues={initialValue}
											values={values}
											errors={errors}
											handleChange={handleChange}
											handleBlur={handleBlur}
											touched={touched}
											isSubmitting={isSubmitting}
											setFieldValue={setFieldValue}
										/>
									)}

									<Grid container item md={11} columnSpacing={2} sm={12} xs={12} className={classes.signup__actions}>
										<Grid item md={6} sm={6} xs={12} order={{ md: 1, sm: 1, xs: 2 }}>
											{activeStep === 0 ? (
												<Link to="/signup" style={{ textDecoration: 'none' }}>
													<Button type="button" variant="outlined" fullWidth className={classes.signup__back__button}>
														Back
													</Button>
												</Link>
											) : (
												<Button
													type="button"
													variant="outlined"
													fullWidth
													disabled={activeStep === 0}
													onClick={() => handleBack(setFieldValue)}
													sx={{ mr: 1 }}
													className={classes.signup__back__button}
												>
													Back
												</Button>
											)}
										</Grid>

										<Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
											<Button
												disabled={isSubmitting || (activeStep === 1 && !values?.terms)}
												type="submit"
												variant="contained"
												fullWidth
												className={classes.signup__button}
											>
												{activeStep === steps.length - 1 ? 'Submit' : 'Next'}
											</Button>
										</Grid>
									</Grid>
								</Form>
							)}
						</Formik>
					)}
				</Box>

				<Typography variant="body2" color="initial" sx={{ marginTop: '15px' }}>
					Alreay have an account?{' '}
					<Link className={classes.signup__link} to="/">
						Sign In
					</Link>
				</Typography>
			</Paper>

			{successModal && (
				<AlertModal
					redirectTo="/"
					title="Registration Successful"
					description="Your account has been successfully registered you can now login"
					button="Go to login"
					showModal={successModal}
					closeModal={setSuccessModal}
				/>
			)}
		</>
	);
};

export default BusinessSignup;
