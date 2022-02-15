import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../../components/modecules/AlertModal';
import TextInputField from '../../components/modecules/TextInputField';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../reducers/LoadingReducer';
import { sleep } from '../../utils/functions';
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
		'&:disabled': {
			color: `${theme.palette.primary.disable} !important`,
			background: `${theme.palette.secondary.sec} !important`,
		},
	},
	forgot__password__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const ForgotPassword = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

	const classes = useStyles();

	const initialValues = {
		email: '',
	};

	const handleSubmitForgotPassword = async (data, fn) => {
		dispatch(startLoading());
		console.log({ data });

		sleep(5000).then(() => {
			fn.resetForm();
			dispatch(stopLoading());
			setShowForgotPasswordModal(true);
			fn.setSubmitting(false);
		});
	};

	return (
		<>
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
								{() => (
									<Form>
										<fieldset disabled={loading} style={{ border: 'none' }}>
											<TextInputField
												fullWidth
												isRequired
												label="Email"
												name="email"
												type="email"
												boxStyles={{ padding: '20px 0' }}
											/>

											<Button
												type="submit"
												disabled={loading}
												endIcon={loading && <CircularProgress size={20} color="inherit" />}
												variant="contained"
												fullWidth
												className={classes.forgot__password__button}
											>
												{loading ? 'Resettting Password...' : 'Reset Password'}
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

			{showForgotPasswordModal && (
				<AlertModal
					title="Check Your Email"
					description="We have send you reset password link to your email, please check your email."
					button="Close"
					showModal={showForgotPasswordModal}
					closeModal={setShowForgotPasswordModal}
				/>
			)}
		</>
	);
};

export default ForgotPassword;
