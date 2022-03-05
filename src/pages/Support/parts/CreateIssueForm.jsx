import { Alert, Box, Button, Grid, Paper, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { issueUrls, methods } from '../../../apis/urls';
import useAxios from '../../../apis/useAxios';
import ErrorAlert from '../../../components/atoms/ErrorAlert';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../components/modecules/SelectInputField';
import TextInputField from '../../../components/modecules/TextInputField';
import useError from '../../../hooks/useError';
import { sleep } from '../../../utils/functions';
import createIssueInitialValues from '../validation/createIssueInitialValues';
import createIssueValidation from '../validation/createIssueValidation';

const issueItems = [
	{ id: '1', label: 'Shipment', value: 'SHIPMENT' },
	{ id: '2', label: 'blah blah', value: 'blah blah' },
];

const useStyles = makeStyles((theme) => ({
	issue: {},
	box: {
		padding: theme.spacing(4, 4),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
		margin: theme.spacing(0, 0, 3, 0),

		'& h5': {
			color: theme.palette.status.pending,
			margin: theme.spacing(0, 0, 3, 0),
		},
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
	issue__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	issue__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const CreateIssueForm = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { state: errorState, dispatch: errorDispatch } = useError();
	const [successBar, setSuccessBar] = useState(false);
	const { requestToServerWith, loading } = useAxios();

	const classes = useStyles();
	const navigateTo = useNavigate();

	const handleCloseSuccessBar = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSuccessBar(false);
	};

	const submitForm = async (values, actions) => {
		const response = await requestToServerWith({
			url: issueUrls.issues,
			method: methods.POST,
			data: values,
		});
		if ([200, 201].includes(response?.status)) {
			setSuccessBar(true);
			actions.resetForm();
			actions.setSubmitting(false);
			await sleep(2000);
			navigateTo('/supports');
		}
	};

	const handleSubmit = (values, actions) => {
		submitForm(values, actions);
	};

	return (
		<>
			<Formik initialValues={createIssueInitialValues} validate={createIssueValidation} onSubmit={handleSubmit}>
				{({ isSubmitting, values, errors, handleChange, handleBlur, touched }) => (
					<Form>
						<Paper className={classes.box}>
							<Box className={classes.box__header}>
								<Typography variant="h5" fontWeight="bold">
									{t('having-trouble')}
								</Typography>
							</Box>

							<ErrorAlert />

							<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
								<Grid container spacing={2}>
									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth isRequired label={t('first-name')} name="firstName" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth isRequired label={t('last-name')} name="lastName" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<PhoneNumberInputField fullWidth label={t('mobile-number')} name="phone" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth label={t('email')} name="email" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<SelectInputField items={issueItems} fullWidth isRequired label={t('subject')} name="subject" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth isRequired label={t('issue-shipment-id')} name="shipmentCode" />
									</Grid>

									<Grid item md={12} sm={12} xs={12}>
										<input id="create-issue-file" hidden />
										<FileUploadElement
											fullWidth
											htmlFor="create-issue-file"
											type="file"
											label={t('attachment')}
											name="attachment"
											// defaultValue={null}
											value={values.attachment}
											onChange={handleChange}
											onBlur={handleBlur}
											error={touched.attachment && Boolean(errors.attachment)}
											helperText={touched.attachment && errors.attachment}
										/>
									</Grid>

									<Grid item md={12} sm={12} xs={12}>
										<TextInputField fullWidth isRequired multiline minRows={4} label={t('message')} name="message" />
									</Grid>
								</Grid>
							</fieldset>
						</Paper>
						<div className={classes.issue__actions}>
							<Button
								type="button"
								variant="outlined"
								onClick={() => navigateTo(-1)}
								sx={{ ml: 'auto !important' }}
								className={classes.issue__back__button}
							>
								{t('cancel')}
							</Button>

							<Button disabled={loading} type="submit" variant="contained" className={classes.issue__button}>
								{t('submit')}
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
					Issue Created Successfully
				</Alert>
			</Snackbar>
		</>
	);
};

export default CreateIssueForm;
