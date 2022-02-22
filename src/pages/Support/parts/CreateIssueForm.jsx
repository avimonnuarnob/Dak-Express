import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../components/modecules/SelectInputField';
import TextInputField from '../../../components/modecules/TextInputField';
import { sleep } from '../../../utils/functions';
import createIssueInitialValues from '../validation/createIssueInitialValues';
import createIssueValidation from '../validation/createIssueValidation';

const issueItems = [
	{ id: '1', label: 'blah', value: 'blah' },
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
	const classes = useStyles();
	const navigate = useNavigate();

	const submitForm = async (values, actions) => {
		await sleep(2000);
		console.log(JSON.stringify(values, null, 2));

		actions.setSubmitting(false);
	};

	const handleSubmit = (values, actions) => {
		submitForm(values, actions);
	};

	return (
		<Formik initialValues={createIssueInitialValues} validate={createIssueValidation} onSubmit={handleSubmit}>
			{({ isSubmitting, values, errors, handleChange, handleBlur, touched }) => (
				<Form>
					<Paper className={classes.box}>
						<Box className={classes.box__header}>
							<Typography variant="h5" fontWeight="bold">
								{t('having-trouble')}
							</Typography>
						</Box>

						<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
							<Grid container spacing={2}>
								<Grid item md={6} sm={6} xs={12}>
									<TextInputField fullWidth isRequired label={t('full-name')} name="fullName" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<PhoneNumberInputField fullWidth isRequired label={t('mobile-number')} name="phone" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<TextInputField fullWidth isRequired label={t('email')} name="email" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectInputField items={issueItems} fullWidth isRequired label={t('subject')} name="subject" />
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<FileUploadElement
										fullWidth
										// isrequired
										type="file"
										label=""
										name={t('attachment')}
										// defaultValue={null}
										value={values.attachment}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.attachment && Boolean(errors.attachment)}
										helperText={touched.attachment && errors.attachment}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<TextInputField fullWidth isRequired label={t('issue-shipment-id')} name="ship_id" />
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
							disabled={false}
							onClick={() => navigate(-1)}
							sx={{ ml: 'auto !important' }}
							className={classes.issue__back__button}
						>
							{t('cancel')}
						</Button>

						<Button disabled={false} type="submit" variant="contained" className={classes.issue__button}>
							{t('submit')}
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default CreateIssueForm;
