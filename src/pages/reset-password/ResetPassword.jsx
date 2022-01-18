import { Grid } from '@mui/material/';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import * as React from 'react';
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
	reset__password: {
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
	reset__password__header: {
		fontWeight: 'bolder !important',
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	reset__password__text: {
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	reset__password__others: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	reset__password__rememberme: {
		color: `${theme.palette.secondary.main} !important`,
	},
	reset__password__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '30px 0 !important',
	},
	reset__password__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const ResetPassword = () => {
	const classes = useStyles();

	const initialValues = {
		password: '',
		confirmPassword: '',
	};

	// TODO: Make API call for sign in to account
	const handleSubmitResetPassword = (data, others) => {
		console.log(data, others);
		others.setSubmitting(false);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item xl={4} lg={4} md={4} sm={10} xs={12}>
				<Item>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.reset__password}>
						<Typography variant="h4" className={classes.reset__password__header}>
							Set New Password
						</Typography>

						<Typography variant="body2" className={classes.reset__password__text}>
							Please enter your new password.
						</Typography>

						<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitResetPassword}>
							{({ errors, values, touched, handleBlur, handleChange, isSubmitting }) => (
								<Form>
									<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
										<PasswordInputElement
											label="Password*"
											name="password"
											fullWidth
											boxStyles={{ padding: '30px 0' }}
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.password && Boolean(errors.password)}
											helperText={touched.password && errors.password}
										/>

										<PasswordInputElement
											label="Confirm Password*"
											name="confirmPassword"
											fullWidth
											value={values.confirmPassword}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.confirmPassword && Boolean(errors.confirmPassword)}
											helperText={touched.confirmPassword && errors.confirmPassword}
										/>

										<Button type="submit" variant="contained" fullWidth className={classes.reset__password__button}>
											Save Password
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>
					</Paper>
				</Item>
			</Grid>
		</Grid>
	);
};

export default ResetPassword;
