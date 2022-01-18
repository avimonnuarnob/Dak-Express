import { Box, Grid, Link } from '@mui/material/';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import * as React from 'react';
import InputElement from '../../components/modecules/InputElement';
import PasswordInputElement from '../../components/modecules/PasswordInputElement';
import validate from './validation/validate';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	signin: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: `33%`,
		[theme.breakpoints.down('md')]: {
			width: `67%`,
		},
		[theme.breakpoints.down('sm')]: {
			width: `100%`,
		},
	},
	signin__header: {
		fontWeight: 'bolder !important',
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	signin__text: {
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	signin__others: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	signin__rememberme: {
		color: `${theme.palette.secondary.main} !important`,
	},
	signin__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '20px 0 !important',
	},
	signin__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const SignIn = () => {
	const classes = useStyles();

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	};

	// TODO: Make API call for sign in to account
	const handleSubmitSignin = (data, others) => {
		console.log(data, others);
		others.setSubmitting(false);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item xl={4} lg={4} md={4} sm={10} xs={12}>
				<Item>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.signin}>
						<Typography variant="h4" className={classes.signin__header}>
							Sign In
						</Typography>

						<Typography variant="body2" className={classes.signin__text}>
							Fill in the fields below to sign in into your account.
						</Typography>

						<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitSignin}>
							{({ errors, values, touched, handleBlur, handleChange, isSubmitting }) => (
								<Form>
									<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
										<InputElement
											fullWidth
											label="Username or Email"
											name="email"
											boxStyles={{ padding: '30px 0' }}
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.email && Boolean(errors.email)}
											helperText={touched.email && errors.email}
										/>

										<PasswordInputElement
											label="Password"
											name="password"
											fullWidth
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.password && Boolean(errors.password)}
											helperText={touched.password && errors.password}
										/>

										<Box className={classes.signin__others}>
											<FormGroup>
												<FormControlLabel
													className={classes.signin__rememberme}
													control={
														<Checkbox
															name="rememberMe"
															className={classes.signin__rememberme}
															value={values.rememberMe}
															onChange={handleChange}
															onBlur={handleBlur}
														/>
													}
													label="Remember Me"
												/>
											</FormGroup>

											<Link className={classes.signin__link} href="/forgot-password">
												Forgot Password?
											</Link>
										</Box>

										<Button type="submit" variant="contained" fullWidth className={classes.signin__button}>
											Sign In
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>

						<Typography variant="body2" color="initial">
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							Don't have account?{' '}
							<Link className={classes.signin__link} href="/signup">
								Create An Account
							</Link>
						</Typography>
					</Paper>
				</Item>
			</Grid>
		</Grid>
	);
};

export default SignIn;
