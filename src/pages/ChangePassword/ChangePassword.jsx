import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../../components/modecules/AlertModal';
import PasswordInputField from '../../components/modecules/PasswordInputField';
import useAuthToken from '../../hooks/useAuthToken';
import { setAuthToken } from '../../reducers/AuthReducer';
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
	change_password: {
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
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const { state: authToken, dispatch: authDispatcher } = useAuthToken();

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

	return (
		<>
			<Grid container className={classes.container}>
				<Grid item xl={4} lg={4} md={4} sm={10} xs={12}>
					<Item>
						<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.change_password}>
							<Typography variant="h4" className={classes.change_password__header}>
								Set New Password
							</Typography>

							<Typography variant="body2" className={classes.change_password__text}>
								Please enter your current and new password.
							</Typography>

							<Formik initialValues={initialValues} validate={validate} onSubmit={hadnleSubmitChangePassword}>
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

											<PasswordInputField fullWidth isRequired label="Confirm New Password" name="confirmNewPassword" />

											<Button
												type="submit"
												variant="contained"
												disabled={loading}
												endIcon={loading && <CircularProgress size={20} color="inherit" />}
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
					</Item>
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
