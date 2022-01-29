/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputElement from '../../../components/modecules/InputElement';
import PasswordInputElement from '../../../components/modecules/PasswordInputElement';
import PhoneNumberInput from '../../../components/modecules/PhoneNumberInput';
import RegistrationSuccessModal from '../../../components/modecules/RegistrationSuccessModal';
import SelectElement from '../../../components/modecules/SelectInput';
import { sleep } from '../../../utils/functions';
import validate from './validation/validate';

const useStyles = makeStyles((theme) => ({
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

const roleItems = [
	{ id: 1, label: 'Admin', value: 'admin' },
	{ id: 2, label: 'Super Admin', value: 'super admin' },
];

const IndividualSignup = () => {
	const [successModal, setSuccessModal] = useState(false);

	const initialValues = {
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

	const classes = useStyles();

	// TODO: Make API call for sign up
	const handleSubmitSignup = async (data, others) => {
		console.log(data);
		others.setSubmitting(false);

		await sleep(2000);
		setSuccessModal(true);
	};

	return (
		<>
			<Paper elevation={3} className={classes.signup}>
				<Typography variant="h4" className={classes.signup__header}>
					Let's Get Started With
				</Typography>

				<Typography variant="h6" className={classes.signup__header}>
					Individual
				</Typography>

				<Typography variant="body2" className={classes.signup__text}>
					Please provide the following informations.
				</Typography>

				<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitSignup}>
					{({ errors, values, touched, handleBlur, handleChange, isSubmitting, setFieldValue }) => (
						<Form>
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

									<Grid item md={6} sm={6} xs={12}>
										<Box sx={{ paddingTop: '10px' }}>
											<PhoneNumberInput
												fullWidth
												isRequired
												label="Phone"
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
										<InputElement
											fullWidth
											isRequired
											label="Email"
											name="email"
											boxStyles={{ paddingTop: '10px' }}
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.email && Boolean(errors.email)}
											helperText={touched.email && errors.email}
										/>
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<SelectElement
											fullWidth
											isRequired
											items={roleItems}
											label="Role"
											name="role"
											boxStyles={{ paddingTop: '10px' }}
											value={values.role}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.role && Boolean(errors.role)}
											helperText={touched.role && errors.role}
										/>
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<InputElement
											type="number"
											fullWidth
											isRequired
											label="NID Number"
											name="nid"
											boxStyles={{ paddingTop: '10px' }}
											value={values.nid}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.nid && Boolean(errors.nid)}
											helperText={touched.nid && errors.nid}
										/>
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<PasswordInputElement
											fullWidth
											isRequired
											label="Password"
											name="password"
											boxStyles={{ paddingTop: '10px' }}
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.password && Boolean(errors.password)}
											helperText={touched.password && errors.password}
										/>
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<PasswordInputElement
											fullWidth
											isRequired
											label="Confirm Password"
											name="confirmPassword"
											boxStyles={{ paddingTop: '10px' }}
											value={values.confirmPassword}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.confirmPassword && Boolean(errors.confirmPassword)}
											helperText={touched.confirmPassword && errors.confirmPassword}
										/>
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<FormGroup>
											<FormControlLabel
												sx={{ color: 'black !important' }}
												control={
													<Checkbox
														name="terms"
														className={classes.signup__rememberme}
														value={values.rememberMe}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												}
												label={
													<span>
														I agree with DAK Express{' '}
														<Link to="terms-and-conditions" className={classes.signup__link}>
															<span variant="body1" sx={{ marginLeft: '-10px' }}>
																terms & conditions
															</span>
														</Link>
													</span>
												}
											/>
										</FormGroup>
									</Grid>

									<Grid container item md={11} columnSpacing={2} sm={12} xs={12} className={classes.signup__actions}>
										<Grid item md={6} sm={6} xs={12} order={{ md: 1, sm: 1, xs: 2 }}>
											<Link to="/signup" style={{ textDecoration: 'none' }}>
												<Button type="button" variant="outlined" fullWidth className={classes.signup__back__button}>
													Back
												</Button>
											</Link>
										</Grid>

										<Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
											<Button
												disabled={!values.terms}
												type="submit"
												variant="contained"
												fullWidth
												className={classes.signup__button}
											>
												Submit
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</fieldset>
						</Form>
					)}
				</Formik>

				<Typography variant="body2" color="initial" sx={{ marginTop: '10px' }}>
					Alreay have an account?{' '}
					<Link className={classes.signup__link} to="/">
						Sign In
					</Link>
				</Typography>
			</Paper>

			{successModal && <RegistrationSuccessModal showModal={successModal} closeModal={setSuccessModal} />}
		</>
	);
};

export default IndividualSignup;
