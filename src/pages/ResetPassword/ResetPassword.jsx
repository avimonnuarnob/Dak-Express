import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';
import AlertModal from '../../components/modecules/AlertModal';
import PasswordInputField from '../../components/modecules/PasswordInputField';
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
	reset__password: {},
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
		'&:disabled': {
			color: `${theme.palette.primary.disable} !important`,
			background: `${theme.palette.secondary.sec} !important`,
		},
	},
	reset__password__link: {
		color: `${theme.palette.secondary.main} !important`,
		textDecoration: 'none !important',
	},
}));

const ResetPassword = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

	// eslint-disable-next-line no-unused-vars
	const redirectTo = useNavigate();
	const classes = useStyles();

	const initialValues = {
		password: '',
		confirmPassword: '',
	};

	// TODO: Make API call for sign in to account
	const handleSubmitResetPassword = async (data, fn) => {
		console.log({ data });
		dispatch(startLoading());
		await sleep(2000);
		setShowResetPasswordModal(true);
		dispatch(stopLoading());

		sleep(4000).then(() => {
			fn.resetForm();
			fn.setSubmitting(false);
			setShowResetPasswordModal(false);
			redirectTo('/');
		});
	};

	return (
		<>
			<Grid container className={classes.container}>
				<Grid item xl={4} lg={4} md={4} sm={10} xs={12}>
					<Paper elevation={3} sx={{ padding: '50px 30px' }} className={classes.reset__password}>
						<Typography variant="h4" className={classes.reset__password__header}>
							Set New Password
						</Typography>

						<Typography variant="body2" className={classes.reset__password__text}>
							Please enter your new password.
						</Typography>

						<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmitResetPassword}>
							{() => (
								<Form>
									<fieldset style={{ border: 'none' }}>
										<PasswordInputField
											fullWidth
											isRequired
											label="Password"
											name="password"
											boxStyles={{ padding: '30px 0' }}
										/>

										<PasswordInputField fullWidth isRequired label="Confirm Password" name="confirmPassword" />

										<Button
											type="submit"
											disabled={loading}
											endIcon={loading && <CircularProgress size={20} color="inherit" />}
											variant="contained"
											fullWidth
											className={classes.reset__password__button}
										>
											{loading ? 'Saving New Password...' : 'Save Password'}
										</Button>
									</fieldset>
								</Form>
							)}
						</Formik>
					</Paper>
				</Grid>
			</Grid>

			{showResetPasswordModal && (
				<AlertModal
					redirectTo="/"
					title="Password Reset Successfully"
					description="We have reset you old password and save new given password."
					button="Sign In"
					showModal={showResetPasswordModal}
					closeModal={setShowResetPasswordModal}
				/>
			)}
		</>
	);
};

export default ResetPassword;
