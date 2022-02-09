/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import InputElement from '../../../components/modecules/InputElement';
import PhoneNumberInput from '../../../components/modecules/PhoneNumberInput';
import SelectElement from '../../../components/modecules/SelectInput';
import { sleep } from '../../../utils/functions';
import createIssueInitialValues from '../validation/createIssueInitialValues';
import createIssueValidation from '../validation/createIssueValidation';

const issueItems = [
	{ id: 1, label: 'blah', value: 'blah' },
	{ id: 2, label: 'blah blah', value: 'blah blah' },
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
	const classes = useStyles();

	const submitForm = async (values, actions) => {
		await sleep(2000);
		console.log(JSON.stringify(values, null, 2));

		actions.setSubmitting(false);
	};

	const handleSubmit = (values, actions) => {
		submitForm(values, actions);
	};

	return (
		<Formik
			initialValues={createIssueInitialValues}
			validate={createIssueValidation}
			onSubmit={handleSubmit}
		>
			{({
				isSubmitting,
				values,
				errors,
				handleChange,
				handleBlur,
				touched,
				setFieldValue,
			}) => (
				<Form>
					<Paper className={classes.box}>
						<Box className={classes.box__header}>
							<Typography variant="h5" fontWeight="bold">
								Having trouble?
							</Typography>
						</Box>

						<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
							<Grid container spacing={2}>
								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Full Name"
										name="fullName"
										boxStyles={{ paddingTop: '10px' }}
										value={values.fullName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.fullName && Boolean(errors.fullName)}
										helperText={touched.fullName && errors.fullName}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<Box sx={{ paddingTop: '10px' }}>
										<PhoneNumberInput
											fullWidth
											isRequired
											label="Mobile Number"
											name="phone"
											value={values.phone}
											handleChange={handleChange}
											handleBlur={handleBlur}
											error={touched.phone && Boolean(errors.phone)}
											helperText={touched.phone && errors.phone}
											setFieldValue={setFieldValue}
										/>
									</Box>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Email"
										name="email"
										boxStyles={{ paddingTop: '10px' }}
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.email && Boolean(errors.email)}
										helperText={touched.email && errors.email}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectElement
										fullWidth
										isRequired
										items={issueItems}
										label="Subject"
										name="subject"
										boxStyles={{ paddingTop: '10px' }}
										value={values.districtOrState}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.subject && Boolean(errors.subject)}
										helperText={touched.subject && errors.subject}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<FileUploadElement
										fullWidth
										isRequired
										type="file"
										label=""
										name="attachment"
										defaultValue={null}
										boxStyles={{ paddingTop: '10px' }}
										value={values.attachment}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.attachment && Boolean(errors.attachment)}
										helperText={touched.attachment && errors.attachment}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Shipment Reference ID"
										name="ship_id"
										boxStyles={{ paddingTop: '10px' }}
										value={values.ship_id}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.ship_id && Boolean(errors.ship_id)}
										helperText={touched.ship_id && errors.ship_id}
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12}>
									<TextField
										multiline
										minRows={4}
										fullWidth
										isRequired
										label="Message"
										name="message"
										boxStyles={{ paddingTop: '10px' }}
										value={values.message}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.message && Boolean(errors.message)}
										helperText={touched.message && errors.message}
									/>
								</Grid>
							</Grid>
						</fieldset>
					</Paper>
					<div className={classes.issue__actions}>
						<Button
							type="button"
							variant="outlined"
							disabled={false}
							onClick={() => {}}
							sx={{ ml: 'auto !important' }}
							className={classes.issue__back__button}
						>
							Back
						</Button>

						<Button
							disabled={false}
							type="submit"
							variant="contained"
							className={classes.issue__button}
						>
							Submit
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default CreateIssueForm;
