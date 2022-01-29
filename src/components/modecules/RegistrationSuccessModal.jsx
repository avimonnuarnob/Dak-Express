import DoneIcon from '@mui/icons-material/Done';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import AlertModal from '../atoms/AlertModal';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	},
	modal__box: {
		background: theme.palette.status.success,
		width: '50px',
		height: '50px',
		borderRadius: '100% !important',
	},
	modal__icon: {
		color: theme.palette.primary.white,
		marginTop: '13px',
		marginLeft: '13px',
	},
	modal__button: {
		background: `${theme.palette.secondary.main} !important`,
	},
}));

const RegistrationSuccessModal = (props) => {
	const classes = useStyles();

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<AlertModal {...props}>
			<Box className={classes.modal}>
				<Box className={classes.modal__box}>
					<DoneIcon className={classes.modal__icon} />
				</Box>

				<Typography variant="h6">Registration Successful</Typography>

				<Typography variant="body2">Your account has been successfully registered you can now login</Typography>

				<Link to="/" style={{ textDecoration: 'none' }}>
					<Button variant="contained" className={classes.modal__button} size="large">
						Go to login
					</Button>
				</Link>
			</Box>
		</AlertModal>
	);
};

export default RegistrationSuccessModal;
