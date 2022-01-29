import { Grid } from '@mui/material/';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import InputElement from '../../components/modecules/InputElement';
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
	forgot__password: {
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
	forgot__password__header: {
		fontWeight: 'bolder !important',
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	forgot__password__text: {
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	forgot__password__others: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	forgot__password__rememberme: {
		color: `${theme.palette.secondary.main} !important`,
	},
	forgot__password__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		marginBottom: '20px !important',
	},
	forgot__password__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const ForgotPassword = () => {
	const classes = useStyles();

	const initialValues = {
		email: '',
	};

	// TODO: Make API call for forgot password
	const handleSubmitForgotPassword = (data, others) => {
		console.log(data, others);
		others.setSubmitting(false);
	};

	return (
		<Grid container className={classes.container}>
			<Grid item xl={4} lg={4} md={4} sm={10} xs={12}>
				<Item>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.forgot__password}>
						<Typography variant="h4" className={classes.forgot__password__header}>
							Forgot Password?
						</Typography>

						<Typography variant="body2" className={classes.forgot__password__text}>
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							Don't worry! Just fill in your email and we'll send you a link to reset your password.
						</Typography>

						<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitForgotPassword}>
							{({ errors, values, touched, handleBlur, handleChange, isSubmitting }) => (
								<Form>
									<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
										<InputElement
											fullWidth
											isRequired
											label="Email"
											name="email"
											type="email"
											boxStyles={{ padding: '20px 0' }}
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.email && Boolean(errors.email)}
											helperText={touched.email && errors.email}
										/>

										<Button type="submit" variant="contained" fullWidth className={classes.forgot__password__button}>
											Reset Password
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>

						<Typography variant="body2" color="initial">
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							Alreay have an account?{' '}
							<Link className={classes.forgot__password__link} to="/">
								Sign In
							</Link>
						</Typography>
					</Paper>
				</Item>
			</Grid>
		</Grid>
	);
};

export default ForgotPassword;
