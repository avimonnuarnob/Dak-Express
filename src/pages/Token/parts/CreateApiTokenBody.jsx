/* eslint-disable prettier/prettier */
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import InputElement from '../../../components/modecules/InputElement';
import SelectElement from '../../../components/modecules/SelectInput';
import { sleep } from '../../../utils/functions';

const roleItems = [
	{ id: 1, label: 'Admin', value: 'admin' },
	{ id: 2, label: 'Super Admin', value: 'super admin' },
];

const useStyles = makeStyles((theme) => ({
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
	box__header__chip: {
		backgroundColor: `${theme.palette.status.success} !important`,
		color: `${theme.palette.primary.white} !important`,
		padding: `${theme.spacing(0, 5)} !important`,
		fontWeight: '600',
	},
	box__header__button: {
		marginRight: '15px !important',
		padding: `${theme.spacing(0.5, 2)} !important`,
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},

	pickup: {},
	pickup__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	pickup__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	pickup__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const CreateApiTokenBody = () => {
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
				name: '',
				type: '',
			}}
			validate={(values) => {
				const errors = {};

				if (!values.name) {
					errors.name = 'Name is Required';
				}
				if (!values.type) {
					errors.type = 'Type is Required';
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
				handleBlur,
				touched,
			}) => (
				<Form>
					<Paper className={classes.box}>
						<Box className={classes.box__header}>
							<Typography variant="h5" fontWeight="bold">
								Generate Token
							</Typography>
						</Box>
						<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
							<Grid container spacing={2}>
								<Grid item md={6} sm={6} xs={12}>
									<InputElement
										fullWidth
										isRequired
										label="Name"
										name="name"
										boxStyles={{ paddingTop: '10px' }}
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.name && Boolean(errors.name)}
										helperText={touched.name && errors.name}
									/>
								</Grid>

								<Grid item md={6} sm={6} xs={12}>
									<SelectElement
										fullWidth
										isRequired
										items={roleItems}
										label="Type"
										name="type"
										boxStyles={{ paddingTop: '10px' }}
										value={values.type}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.type && Boolean(errors.type)}
										helperText={touched.type && errors.type}
									/>
								</Grid>
							</Grid>
						</fieldset>
					</Paper>
					<div className={classes.pickup__actions}>
						<Button
							type="button"
							variant="outlined"
							disabled={false}
							onClick={() => {}}
							sx={{ ml: 'auto !important' }}
							className={classes.pickup__back__button}
						>
							Cancel
						</Button>

						<Button
							disabled={false}
							type="submit"
							variant="contained"
							className={classes.pickup__button}
						>
							Generate Key
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default CreateApiTokenBody;