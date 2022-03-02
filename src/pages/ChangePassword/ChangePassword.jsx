import { Box, Button, CircularProgress, Grid, Paper, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axiosApiInstance from '../../apis/axiosApiInstance';
import ErrorAlert from '../../components/atoms/ErrorAlert';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';
import AlertModal from '../../components/modecules/AlertModal';
import PasswordInputField from '../../components/modecules/PasswordInputField';
import useAuthToken from '../../hooks/useAuthToken';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import useError from '../../hooks/useError';
import { removeAuthToken } from '../../reducers/AuthReducer';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import { removeError } from '../../reducers/ErrorReducer';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../reducers/LoadingReducer';
import { sleep } from '../../utils/functions';
import { catchAllErrors } from '../../utils/serializeErrors';
import validate from './validation/validate';

const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		alignItems: 'center',
		justifyContent: 'center',

		height: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,
	},
	change_password: {},
	change_password__header: {
		fontWeight: 'bolder !important',
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	change_password__text: {
		padding: '5px 0',
		color: theme.palette.typography.main,
	},
	change_password__others: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	change_password__rememberme: {
		color: `${theme.palette.secondary.main} !important`,
	},
	change_password__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		marginTop: '30px !important',
		'&:disabled': {
			color: `${theme.palette.primary.disable} !important`,
			background: `${theme.palette.secondary.sec} !important`,
		},
	},
	change_password__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const ChangePassword = () => {
	const { t } = useTranslation();
	const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	// eslint-disable-next-line no-unused-vars
	const { state: authToken, dispatch: authDispatcher } = useAuthToken();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();
	// eslint-disable-next-line no-unused-vars
	const { state: errorState, dispatch: errorDispatch } = useError();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('profile'), link: 'profile' },
			{ title: t('change-password'), link: 'change-password', current: true },
		],
		[t]
	);

	const navigateTo = useNavigate();
	const classes = useStyles();

	const initialValues = {
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	};

	const hadnleSubmitChangePassword = async (data, fn) => {
		try {
			errorDispatch(removeError());
			dispatch(startLoading());

			const response = await axiosApiInstance.patch('/users/password-change', data);

			if ([200, 201].includes(response?.status)) {
				fn.resetForm();
				dispatch(stopLoading());
				setShowChangePasswordModal(true);
				await sleep(4000);
				authDispatcher(removeAuthToken());
				navigateTo('/');
			}
		} catch (error) {
			catchAllErrors(errorDispatch, error);
		} finally {
			dispatch(stopLoading());
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
	}, [breadcrumbDispatcher, breadcrumbs]);

	useEffect(() => () => setShowChangePasswordModal(false), []);

	return (
		<>
			<Grid container className={classes.container}>
				<Grid item xl={4} lg={4} md={6} sm={10} xs={12}>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.change_password}>
						<Box sx={{ mb: 2 }}>
							<Typography variant="h4" className={classes.change_password__header}>
								{t('set-new-password')}
							</Typography>

							<Typography variant="body2" className={classes.change_password__text}>
								{t('set-new-password-desc')}
							</Typography>
						</Box>

						<ErrorAlert />

						<Formik initialValues={initialValues} validate={validate} onSubmit={hadnleSubmitChangePassword}>
							{({ isSubmitting }) => (
								<Form>
									<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
										<PasswordInputField
											fullWidth
											isRequired
											label={t('current-password')}
											name="oldPassword"
											boxStyles={{ padding: '15px 0 30px 0' }}
										/>

										<PasswordInputField
											fullWidth
											isRequired
											label={t('new-password')}
											name="newPassword"
											boxStyles={{ paddingBottom: '30px' }}
										/>

										<PasswordInputField
											fullWidth
											isRequired
											label={t('confirm-new-password')}
											name="confirmNewPassword"
										/>

										<Button
											type="submit"
											variant="contained"
											disabled={loading}
											endIcon={loading && <CircularProgress size={20} color="inherit" />}
											fullWidth
											className={classes.change_password__button}
										>
											{loading ? t('saving-password') : t('change-password')}
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>
					</Paper>
				</Grid>
			</Grid>

			{showChangePasswordModal && (
				<AlertModal
					redirectTo="/"
					title="Password Changed Successfully"
					description="We have changed your old password and saved new password. You are about to Signing out..."
					button="Sign In"
					showModal={showChangePasswordModal}
					closeModal={setShowChangePasswordModal}
				/>
			)}
		</>
	);
};

export default ChangePassword;
