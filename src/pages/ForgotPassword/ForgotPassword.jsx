import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useReducer, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';
import AlertModal from '../../components/modecules/AlertModal';
import TextInputField from '../../components/modecules/TextInputField';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../reducers/LoadingReducer';
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
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const { t } = useTranslation();

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
				<Grid item xl={5} lg={5} md={5} sm={10} xs={12}>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.forgot__password}>
						<Typography variant="h4" className={classes.forgot__password__header}>
							{t('forgot-password')}?
						</Typography>

						<Typography variant="body2" className={classes.forgot__password__text}>
							{t('forgot-password-description')}
						</Typography>

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
											{loading ? t('resetting-password') : t('forgot-password')}
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
