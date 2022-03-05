import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { authUrls, methods } from '../../apis/urls';
import useAxios from '../../apis/useAxios';
import ErrorAlert from '../../components/atoms/ErrorAlert';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';
import AlertModal from '../../components/modecules/AlertModal';
import TextInputField from '../../components/modecules/TextInputField';
import useError from '../../hooks/useError';
import { sleep } from '../../utils/functions';
import validate from './validation/validate';

const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,

		justifyContent: 'center',
		alignItems: 'center',
	},
	forgot__password: {},
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
	const { t } = useTranslation();
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const { state: errorState, dispatch: errorDispatch } = useError();
	const { loading, requestToServerWith } = useAxios();

	const navigateTo = useNavigate();
	const classes = useStyles();
	const initialValues = { email: '' };

	const handleSubmitForgotPassword = async (data, fn) => {
		try {
			const response = await requestToServerWith({
				url: authUrls.forgetPassword,
				method: methods.POST,
				data: {
					...data,
					redirectUrl: `${window.location.origin}/#/reset-password`,
				},
			});

			if ([200, 201].includes(response?.status)) {
				fn.resetForm();
				setShowForgotPasswordModal(true);
				await sleep(4000);
				navigateTo('/');
			}
			// eslint-disable-next-line no-shadow
		} catch (error) {
			console.debug(error);
		}
	};

	useEffect(() => () => setShowForgotPasswordModal(false), []);

	console.log(window.location.origin);

	return (
		<>
			<Grid container className={classes.container}>
				<Grid item xl={5} lg={5} md={5} sm={10} xs={12}>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.forgot__password}>
						<Box sx={{ mb: 2 }}>
							<Typography variant="h4" className={classes.forgot__password__header}>
								{t('forgot-password')}?
							</Typography>

							<Typography variant="body2" className={classes.forgot__password__text}>
								{t('forgot-password-description')}
							</Typography>
						</Box>

						<ErrorAlert />

						<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitForgotPassword}>
							{() => (
								<Form>
									<fieldset disabled={loading} style={{ border: 'none' }}>
										<TextInputField
											fullWidth
											isRequired
											label={t('sign-in-email-label')}
											name="email"
											type="email"
											boxStyles={{ padding: '15px 0 30px 0' }}
										/>

										<Button
											type="submit"
											disabled={loading}
											endIcon={loading && <CircularProgress size={20} color="inherit" />}
											variant="contained"
											fullWidth
											className={classes.forgot__password__button}
										>
											{loading ? t('resetting-password') : t('reset-password')}
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>

						<Typography variant="body2" color="initial">
							<Trans i18nKey="sign-up-link">
								<Link to="/" className={classes.forgot__password__link} />
							</Trans>
						</Typography>
					</Paper>
				</Grid>
			</Grid>

			{showForgotPasswordModal && (
				<AlertModal
					title={t('forgot-password-modal-title')}
					description={t('forgot-password-modal-description')}
					button={t('forgot-password-modal-button')}
					showModal={showForgotPasswordModal}
					closeModal={setShowForgotPasswordModal}
				/>
			)}
		</>
	);
};

export default ForgotPassword;
