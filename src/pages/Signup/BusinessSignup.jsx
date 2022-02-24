/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, CircularProgress, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useReducer, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import AlertModal from '../../components/modecules/AlertModal';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../reducers/LoadingReducer';
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
		margin: '0 auto',
		width: `67%`,
		[theme.breakpoints.down('md')]: {
			width: `100%`,
		},
		[theme.breakpoints.down('sm')]: {
			// marginTop: '64px!important',
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
}));

const BusinessSignup = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [successModal, setSuccessModal] = useState(false);
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const { t } = useTranslation();

	const steps = [t('sign-up-individual-first-step'), t('sign-up-individual-last-step')];
	const redirectTo = useNavigate();
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

	const submitForm = async (values, fn) => {
		console.log({ values });
		dispatch(startLoading());

		await sleep(2000);
		setSuccessModal(true);
		dispatch(stopLoading());

		sleep(4000).then(() => {
			fn.resetForm();
			fn.setValues({});
			setSuccessModal(false);
			fn.setSubmitting(false);
			redirectTo('/');
		});
	};

	const handleSubmit = (values, fn) => {
		if (isLastStep) {
			submitForm(values, fn);
		} else {
			setActiveStep((currentStep) => currentStep + 1);
			fn.setTouched({});
			fn.setSubmitting(false);
		}
	};

	return (
		<>
			<Box sx={{ py: 5 }}>
				<Paper elevation={3} className={classes.signup}>
					<Typography variant="h4" className={classes.signup__header}>
						{t('sign-up-individual')}
					</Typography>

					<Typography variant="h6" className={classes.signup__header}>
						{t('sign-up-business-type')}
					</Typography>

					<Typography variant="body2" className={classes.signup__text}>
						{t('sign-up-individual-type-subtitle')}
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

										<Grid container spacing={2} sx={{ px: 1 }}>
											<Grid item md={6} sm={6} xs={12} order={{ md: 1, sm: 1, xs: 2 }}>
												{activeStep === 0 ? (
													<Link to="/signup" style={{ textDecoration: 'none' }}>
														<Button type="button" variant="outlined" fullWidth className={classes.signup__back__button}>
															{t('back-button')}
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
														{t('back-button')}
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
													endIcon={loading && <CircularProgress size={20} color="inherit" />}
												>
													{/* eslint-disable-next-line no-nested-ternary */}
													{activeStep === steps.length - 1
														? loading
															? t('signing-up')
															: t('submit-button')
														: t('next-button')}
												</Button>
											</Grid>
										</Grid>
									</Form>
								)}
							</Formik>
						)}
					</Box>

					<Typography variant="body2" color="initial" sx={{ marginTop: '15px' }}>
						<Trans i18nKey="sign-up-link">
							<Link to="/" className={classes.signup__link} />
						</Trans>
					</Typography>
				</Paper>
			</Box>
			{successModal && (
				<AlertModal
					redirectTo="/"
					title={t('sign-up-success-title')}
					description={t('sign-up-success-description')}
					button={t('sign-up-success-button')}
					showModal={successModal}
					closeModal={setSuccessModal}
				/>
			)}
		</>
	);
};

export default BusinessSignup;
