/* eslint-disable prettier/prettier */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import UserAccountInfo from './UserAccountInfo';
import UserCompanyInfo from './UserCompanyInfo';

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
}));

const UserProfileBody = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.box}>
			<Box className={classes.user}>
				<Box className={classes.user__Preview}>
					<img
						src="https://picsum.photos/id/239/200/300"
						alt="Cityscape Global Limited"
						className={classes.user__image}
					/>

					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Typography variant="h6" fontWeight="600" color="secondary.main">
							Md Rafez Hossain
						</Typography>
						<VerifiedIcon fontSize="small" sx={{ color: '#13BFF4' }} />
					</Box>

					<Typography fontWeight="600" color="typography.main">
						BUSINESS
					</Typography>
				</Box>
				<Button
					size="small"
					variant="outlined"
					className={classes['user__button--edit']}
					startIcon={<EditOutlinedIcon />}
				>
					Edit
				</Button>
			</Box>

			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					Account Info
				</Typography>
			</Box>

			<UserAccountInfo />

			<Box className={classes.box__header} sx={{ mt: 3 }}>
				<Typography variant="h5" fontWeight="bold">
					Company Info
				</Typography>
			</Box>

			<UserCompanyInfo />
		</Paper>
	);
};

export default UserProfileBody;
