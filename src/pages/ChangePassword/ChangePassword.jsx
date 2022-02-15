/* eslint-disable prettier/prettier */
import {
	Button,
	CircularProgress,
	Grid,
	Paper,
	Typography,
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	FOOTER_HEIGHT,
	HEADER_HEIGHT,
} from '../../components/layout/constants';

import AlertModal from '../../components/modecules/AlertModal';
import PasswordInputField from '../../components/modecules/PasswordInputField';
import useAuthToken from '../../hooks/useAuthToken';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setAuthToken } from '../../reducers/AuthReducer';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import {
	initialState,
	loadingReducer,
	startLoading,
	stopLoading,
} from '../../reducers/LoadingReducer';

import { sleep } from '../../utils/functions';
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

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Profile', link: 'profile' },
	{ title: 'Change Password', link: 'change-password', current: true },
];

const ChangePassword = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

	// eslint-disable-next-line no-unused-vars
	const { state: authToken, dispatch: authDispatcher } = useAuthToken();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const redirectTo = useNavigate();
	const classes = useStyles();

	const initialValues = {
		currentPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	};

	// TODO: Make API call for change password
	const hadnleSubmitChangePassword = async (data, fn) => {
		console.log({ data });
		dispatch(startLoading());
		await sleep(2000);
		setShowChangePasswordModal(true);
		dispatch(stopLoading());

		sleep(4000).then(() => {
			fn.resetForm();
			fn.setSubmitting(false);
			authDispatcher(setAuthToken(''));
			localStorage.clear();
			sessionStorage.clear();
			setShowChangePasswordModal(false);
			redirectTo('/');
		});
	};

	console.log(localStorage.getItem('sidebar'));

	return (
		<>
			<Grid container className={classes.container}>
				<Grid item xl={4} lg={4} md={6} sm={10} xs={12}>
					<Paper
						elevation={3}
						sx={{ padding: '50px 30px' }}
						className={classes.change_password}
					>
						<Typography
							variant="h4"
							className={classes.change_password__header}
						>
							Set New Password
						</Typography>

						<Typography
							variant="body2"
							className={classes.change_password__text}
						>
							Please enter your current and new password.
						</Typography>

						<Formik
							initialValues={initialValues}
							validate={validate}
							onSubmit={hadnleSubmitChangePassword}
						>
							{({ isSubmitting }) => (
								<Form>
									<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
										<PasswordInputField
											fullWidth
											isRequired
											label="Current Password"
											name="currentPassword"
											boxStyles={{ padding: '30px 0' }}
										/>

										<PasswordInputField
											fullWidth
											isRequired
											label="New Password"
											name="newPassword"
											boxStyles={{ paddingBottom: '30px' }}
										/>

										<PasswordInputField
											fullWidth
											isRequired
											label="Confirm New Password"
											name="confirmNewPassword"
										/>

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
											className={classes.change_password__button}
										>
											{loading ? 'Saving New Password...' : 'Change Password'}
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