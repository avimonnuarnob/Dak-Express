/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import TextInputField from '../../../components/modecules/TextInputField';
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
			initialValues={{
				message: '',
				attachment: '',
			}}
			validate={(values) => {
				const errors = {};

				if (!values.message) {
					errors.message = 'Message is Required';
				}

				return errors;
			}}
			onSubmit={handleSubmit}
		>
			{({
				isSubmitting,
				values,
				errors,
				handleChange,
				touched,
				handleBlur,
			}) => (
				<Form>
					<Paper
						sx={{
							py: 2,
							px: 2,
							mt: 3,
						}}
					>
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
										Message
									</Typography>
								</Grid>

								<Grid item md={8} xs={12}>
									<TextInputField
										fullWidth
										isRequired
										multiline
										minRows={4}
										label="Message"
										name="message"
									/>
								</Grid>
								<Grid item md={4} xs={12} />
								<Grid item md={8} xs={12}>
									<FileUploadElement
										fullWidth
										type="file"
										label=""
										name="attachment"
										value={values.attachment}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.attachment && Boolean(errors.attachment)}
										helperText={touched.attachment && errors.attachment}
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
							onClick={toggleMessageForm}
							sx={{ ml: 'auto !important' }}
							className={classes.issue__back__button}
						>
							Cancel
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

export default ReplyMessageForm;
