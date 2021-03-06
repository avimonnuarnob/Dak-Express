import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { authUrls, methods } from '../../apis/urls';
import useAxios from '../../apis/useAxios';
import ErrorAlert from '../../components/atoms/ErrorAlert';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';
import CheckboxInputField from '../../components/modecules/CheckboxInputField';
import PasswordInputField from '../../components/modecules/PasswordInputField';
import TextInputField from '../../components/modecules/TextInputField';
import useAuthToken from '../../hooks/useAuthToken';
import useError from '../../hooks/useError';
import { setAuthToken } from '../../reducers/AuthReducer';
import validate from './validation/validate';

const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,

		justifyContent: 'center',
		alignItems: 'center',
	},
	signin: {},
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

const SignIn = () => {
	// eslint-disable-next-line no-unused-vars
	const { state: authToken, dispatch: authDispatcher } = useAuthToken();
	const { t } = useTranslation();
	// const [loading, dispatch] = useReducer(loadingReducer, initialState);
	// eslint-disable-next-line no-unused-vars
	const { state: errorState, dispatch: errorDispatcher } = useError();
	// eslint-disable-next-line no-unused-vars
	const { error, loading, requestToServerWith } = useAxios();

	const rememberMeSelectionItems = [
		{
			id: 'dd63a554-8bd2-11ec-a8a3-0242ac120002',
			value: false,
			label: t('sign-in-remember-me'),
		},
	];

	const navigateTo = useNavigate();
	const classes = useStyles();

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	};

	const handleSubmitSignin = async (data, fn) => {
		try {
			const response = await requestToServerWith({ url: authUrls.signin, method: methods.POST, data });

			if ([200, 201].includes(response?.status)) {
				const { accessToken, refreshToken } = response.data;

				authDispatcher(setAuthToken(accessToken));
				localStorage.setItem('refreshToken', refreshToken);

				fn.resetForm();

				if (localStorage.getItem('token')) {
					navigateTo('/dashboard');
				}
			}
			// eslint-disable-next-line no-shadow
		} catch (error) {
			console.debug(error);
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
				<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.signin}>
					<Box sx={{ mb: 2 }}>
						<Typography variant="h4" className={classes.signin__header}>
							{t('sign-in-title')}
						</Typography>

						<Typography variant="body2" className={classes.signin__text}>
							{t('sign-in-subtitle')}
						</Typography>
					</Box>

					<ErrorAlert />

					<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitSignin}>
						{() => (
							<Form>
								<fieldset disabled={loading} style={{ border: 'none' }}>
									<TextInputField
										fullWidth
										isRequired
										label={t('sign-in-email-label')}
										name="email"
										boxStyles={{ padding: '15px 0 30px 0' }}
									/>

									<PasswordInputField
										fullWidth
										isRequired
										label={t('sign-in-password-label')}
										name="password"
										boxStyles={{ paddingBottom: '10px' }}
									/>

									<Box className={classes.signin__others}>
										<CheckboxInputField items={rememberMeSelectionItems} name="rememberMe" coloredLabel />

										<Link className={classes.signin__link} to="/forgot-password">
											<Typography>{t('sign-in-forgot-password')}</Typography>
										</Link>
									</Box>

									<Button
										type="submit"
										variant="contained"
										disabled={loading}
										endIcon={loading && <CircularProgress size={20} color="inherit" />}
										fullWidth
										className={classes.signin__button}
									>
										{loading ? t('signing-in') : t('sign-in')}
									</Button>
								</fieldset>
							</Form>
						)}
					</Formik>

					<Typography variant="body2" color="initial">
						<Trans i18nKey="sign-in-link">
							<Link to="/signup" className={classes.signin__link} />
						</Trans>
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default SignIn;
