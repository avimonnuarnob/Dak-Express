import { Alert, Button, CircularProgress, Grid, Paper, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { issueUrls, methods } from '../../../apis/urls';
import useAxios from '../../../apis/useAxios';
import ErrorAlert from '../../../components/atoms/ErrorAlert';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import TextInputField from '../../../components/modecules/TextInputField';
import useError from '../../../hooks/useError';
import { sleep } from '../../../utils/functions';

const useStyles = makeStyles((theme) => ({
	issue: {},
	issue__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	issue__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	issue__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const ReplyMessageForm = ({ toggleMessageForm }) => {
	const [successBar, setSuccessBar] = useState(false);
	const { t } = useTranslation();
	const { requestToServerWith, loading } = useAxios();
	// eslint-disable-next-line no-unused-vars
	const { state: errorState, dispatch: errorDispatch } = useError();
	const { id } = useParams();
	const classes = useStyles();

	const handleCloseSuccessBar = (event, reason) => {
		if (reason === 'clickaway') return;
		setSuccessBar(false);
	};

	const handleSubmitReplyMessage = async (data, actions) => {
		const response = await requestToServerWith({
			url: issueUrls.issueReply,
			method: methods.POST,
			data: { ...data, issueId: id },
		});

		if ([200, 201].includes(response?.status)) {
			setSuccessBar(true);
			actions.resetForm();
			actions.setSubmitting(false);
			await sleep(2000);
			window.scrollTo(0, 0);
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					message: '',
					image: [],
				}}
				validate={(values) => {
					const errors = {};

					if (!values.message) {
						errors.message = 'Message is Required';
					}

					return errors;
				}}
				onSubmit={handleSubmitReplyMessage}
			>
				{({ isSubmitting, values, errors, handleChange, touched, handleBlur }) => (
					<Form>
						<Paper sx={{ py: 2, px: 2, mt: 3 }}>
							<ErrorAlert />

							<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
								<Grid container spacing={2}>
									<Grid item md={4} xs={12}>
										<Typography
											variant="h5"
											fontWeight="600"
											sx={{
												color: 'status.pending',
											}}
										>
											{t('reply-message')}
										</Typography>
									</Grid>

									<Grid item md={8} xs={12}>
										<TextInputField
											fullWidth
											isRequired
											multiline
											minRows={4}
											label={t('message-here')}
											name="message"
										/>
									</Grid>
									<Grid item md={4} xs={12} />
									<Grid item md={8} xs={12}>
										<FileUploadElement
											fullWidth
											type="file"
											label=""
											name="image"
											value={values.image}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.image && Boolean(errors.image)}
											helperText={touched.image && errors.image}
										/>
									</Grid>
								</Grid>
							</fieldset>
						</Paper>
						<div className={classes.issue__actions}>
							<Button
								type="button"
								variant="outlined"
								onClick={toggleMessageForm}
								sx={{ ml: 'auto !important' }}
								className={classes.issue__back__button}
							>
								{t('cancel')}
							</Button>

							<Button
								disabled={loading}
								type="submit"
								variant="contained"
								endIcon={loading && <CircularProgress size={20} color="inherit" />}
								className={classes.issue__button}
							>
								{loading ? t('submitting') : t('submit')}
							</Button>
						</div>
					</Form>
				)}
			</Formik>
			<Snackbar
				open={successBar}
				autoHideDuration={6000}
				onClose={handleCloseSuccessBar}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={handleCloseSuccessBar}
					variant="filled"
					severity="success"
					color="secondary"
					sx={{ width: '100%' }}
				>
					Reply Sent Successfully
				</Alert>
			</Snackbar>
		</>
	);
};

export default ReplyMessageForm;
