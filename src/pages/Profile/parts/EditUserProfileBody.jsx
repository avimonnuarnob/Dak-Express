/* eslint-disable prettier/prettier */
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import editUserProfileValidation from '../validation/editUserProfileValidation';
import editUserProfileValues from '../validation/editUserProfileValues';
import EditAccountInfoForm from './EditAccountInfoForm';
import EditCompanyInfoForm from './EditCompanyInfoForm';

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(4, 4),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.sec}`,
		margin: theme.spacing(0, 0, 3, 0),

		'& h5': {
			color: theme.palette.status.pending,
			margin: theme.spacing(0, 0, 3, 0),
		},
	},

	user: {
		display: 'flex',
		margin: theme.spacing(0, 0, 3, 0),
	},
	user__Preview: {
		flex: 1,

		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1),
		alignItems: 'center',
		justifyContent: 'center',
	},
	user__image: {
		width: '80px',
		aspectRatio: 1,
		objectFit: 'cover',
		borderRadius: theme.spacing(1),
		boxShadow: theme.shadows[10],
	},
	'user__button--edit': {
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
		alignSelf: 'flex-start',
	},
	edit: {},
	edit__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	edit__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	edit__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const EditUserProfileBody = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={editUserProfileValues}
			validate={editUserProfileValidation}
			onSubmit={(values, actions) => {
				console.log(values);
				actions.setSubmitting(false);
			}}
		>
			{() => (
				<Form>
					<Paper className={classes.box}>
						<Box className={classes.user}>
							<Box className={classes.user__Preview}>
								<img
									src="https://picsum.photos/id/239/200/300"
									alt="Cityscape Global Limited"
									className={classes.user__image}
								/>

								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<Typography
										variant="h6"
										fontWeight="600"
										color="secondary.main"
									>
										Md Rafez Hossain
									</Typography>
									<VerifiedIcon fontSize="small" sx={{ color: '#13BFF4' }} />
								</Box>

								<Typography fontWeight="600" color="typography.main">
									BUSINESS
								</Typography>
							</Box>
						</Box>

						<Box className={classes.box__header}>
							<Typography variant="h5" fontWeight="bold">
								Account Info
							</Typography>
						</Box>

						{/* edit account information */}
						<EditAccountInfoForm />
					</Paper>

					<Paper className={classes.box}>
						<Box className={classes.box__header} sx={{ mt: 3 }}>
							<Typography variant="h5" fontWeight="bold">
								Company Info
							</Typography>
						</Box>

						{/* edit company information */}
						<EditCompanyInfoForm />
					</Paper>

					<div className={classes.edit__actions}>
						<Button
							type="button"
							variant="outlined"
							disabled={false}
							onClick={() => navigate(-1)}
							sx={{ ml: 'auto !important' }}
							className={classes.edit__back__button}
						>
							Cancel
						</Button>
						<Button
							disabled={false}
							type="submit"
							variant="contained"
							className={classes.edit__button}
						>
							Save
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default EditUserProfileBody;
