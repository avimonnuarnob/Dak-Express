import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';

const useStyles = makeStyles((theme) => ({
	signup: {
		width: '47%',
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 auto',

		[theme.breakpoints.down('md')]: {
			width: `77%`,
			// margin: '40px 0',
		},
		[theme.breakpoints.down('sm')]: {
			// margin: '50px 0',
			width: `87%`,
		},
	},
	signup__individual__card: {
		padding: '55px 10px',
		height: '360px',
		textAlign: 'center',
	},
	signup__individual__icon: {
		height: '70px !important',
		width: '70px !important',
	},
	signup__individual__header: {
		fontWeight: 'bolder !important',
	},
	signup__individual__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
	},
	signup__business__card: {
		padding: '55px 10px',
		height: '360px',
		textAlign: 'center',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.secondary.main,
	},
	signup__business__icon: {
		height: '70px !important',
		width: '70px !important',
		color: theme.palette.secondary.main,
	},
	signup__business__header: {
		fontWeight: 'bolder !important',
		color: `${theme.palette.secondary.main} !important`,
	},
	signup__business__button: {
		color: `${theme.palette.typography.white} !important`,
		background: `${theme.palette.secondary.main} !important`,
	},
}));

const SignUp = () => {
	const classes = useStyles();

	return (
		<Box container className={classes.signup}>
			<Typography variant="h4" color="initial" align="center" py={3}>
				Choose Account Type
			</Typography>

			<Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={3}>
				<Grid item md={6} sm={10} xs={12}>
					<Paper elevation={3} className={classes.signup__individual__card}>
						<AccountCircleIcon className={classes.signup__individual__icon} />

						<Typography variant="h5" color="initial" my={3} className={classes.signup__individual__header}>
							Individual
						</Typography>

						<Typography variant="body2" color="initial" my={3}>
							Best for personal use(Regular courier service).
						</Typography>

						<Link to="/signup/individual" style={{ textDecoration: 'none' }}>
							<Button variant="outlined" className={classes.signup__individual__button} size="large">
								Sign Up
							</Button>
						</Link>
					</Paper>
				</Grid>

				<Grid item md={6} sm={10} xs={12}>
					<Paper elevation={3} className={classes.signup__business__card}>
						<StorefrontIcon className={classes.signup__business__icon} />

						<Typography variant="h5" color="initial" my={3} className={classes.signup__business__header}>
							Business
						</Typography>

						<Typography variant="body2" color="initial" my={3}>
							Best for business use.
						</Typography>

						<Link to="/signup/business" style={{ textDecoration: 'none' }}>
							<Button variant="contained" size="large" className={classes.signup__business__button}>
								Sign Up
							</Button>
						</Link>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default SignUp;
