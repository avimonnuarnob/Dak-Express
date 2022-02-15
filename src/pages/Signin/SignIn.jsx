/* eslint-disable prettier/prettier */
import {
	Box,
	Button,
	CircularProgress,
	Grid,
	Paper,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useEffect, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CheckboxInputField from '../../components/modecules/CheckboxInputField';
import PasswordInputField from '../../components/modecules/PasswordInputField';
import TextInputField from '../../components/modecules/TextInputField';
import useAuthToken from '../../hooks/useAuthToken';
import { setAuthToken } from '../../reducers/AuthReducer';
import {
	initialState,
	loadingReducer,
	startLoading,
	stopLoading,
} from '../../reducers/LoadingReducer';
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
		'&:disabled': {
			color: `${theme.palette.primary.disable} !important`,
			background: `${theme.palette.secondary.sec} !important`,
		},
	},
	signin__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const rememberMeSelectionItems = [
	{
		id: 'dd63a554-8bd2-11ec-a8a3-0242ac120002',
		value: false,
		label: 'Remember Me',
	},
];

const SignIn = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const { state: authToken, dispatch: authDispatcher } = useAuthToken();

	const navigateTo = useNavigate();
	const classes = useStyles();

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	};

	const handleSubmitSignin = async (data, fn) => {
		try {
			dispatch(startLoading());
			const token = data.email + data.password + data.rememberMe;

			sleep(5000)
				.then(() => {
					authDispatcher(setAuthToken(token));
					fn.resetForm();
					dispatch(stopLoading());
				})
				.then(() => {
					if (localStorage.getItem('token')) {
						navigateTo('/dashboard');
					}
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (authToken) {
			return navigateTo('/dashboard');
		}

		return () => null;
	}, [authToken, navigateTo]);

	return (
		<Grid container className={classes.container}>
			<Grid item xl={4} lg={4} md={4} sm={10} xs={12}>
				<Item>
					<Paper
						elevation={3}
						sx={{ padding: '50px 30px' }}
						className={classes.signin}
					>
						<Typography variant="h4" className={classes.signin__header}>
							Sign In
						</Typography>

						<Typography variant="body2" className={classes.signin__text}>
							Fill in the fields below to sign in into your account.
						</Typography>

						<Formik
							initialValues={initialValues}
							validate={validate}
							onSubmit={handleSubmitSignin}
						>
							{() => (
								<Form>
									<fieldset disabled={loading} style={{ border: 'none' }}>
										<TextInputField
											fullWidth
											isRequired
											label="Username or Email"
											name="email"
											boxStyles={{ padding: '30px 0' }}
										/>

										<PasswordInputField
											fullWidth
											isRequired
											label="Password"
											name="password"
											boxStyles={{ paddingBottom: '10px' }}
										/>

										<Box className={classes.signin__others}>
											<CheckboxInputField
												items={rememberMeSelectionItems}
												name="rememberMe"
												coloredLabel
											/>

											<Link
												className={classes.signin__link}
												to="/forgot-password"
											>
												<Typography>Forgot Password?</Typography>
											</Link>
										</Box>

										<Button
											type="submit"
											variant="contained"
											disabled={loading}
											endIcon={
												loading && (
													<CircularProgress size={20} color="inherit" />
												)
											}
											fullWidth
											className={classes.signin__button}
										>
											{loading ? 'Signing In...' : 'Sign In'}
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>

						<Typography variant="body2" color="initial">
							Don&apos;t have account?{' '}
							<Link className={classes.signin__link} to="/signup">
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
