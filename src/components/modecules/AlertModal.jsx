/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ModalHelper from '../atoms/ModalHelper';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	},
	'modal__error--box': {
		background: theme.palette.status.failed,
		width: '50px',
		height: '50px',
		borderRadius: '100% !important',
	},
	'modal__success--box': {
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

const AlertModal = ({ error = false, redirectTo = '/', button = '', title = '', description = '', ...props }) => {
	const classes = useStyles();

	// Clear all the localstorage, sessionStorage and cookies
	const handleOnClick = () => {
		localStorage.clear();
		sessionStorage.clear();

		(() => {
			const cookies = document.cookie.split('; ');
			for (let c = 0; c < cookies.length; c += 1) {
				const d = window.location.hostname.split('.');
				while (d.length > 0) {
					const cookieBase = `${encodeURIComponent(
						cookies[c].split(';')[0].split('=')[0]
					)}=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=${d.join('.')} ;path=`;
					const p = document.location.pathname.split('/');
					document.cookie = `${cookieBase}/`;
					while (p.length > 0) {
						document.cookie = cookieBase + p.join('/');
						p.pop();
					}
					d.shift();
				}
			}
		})();
	};

	return (
		<ModalHelper {...props}>
			<Box className={classes.modal}>
				{error ? (
					<Box className={classes['modal__error--box']}>
						<ClearOutlinedIcon className={classes.modal__icon} />
					</Box>
				) : (
					<Box className={classes['modal__success--box']}>
						<DoneIcon className={classes.modal__icon} />
					</Box>
				)}

				<Typography variant="h6">{title}</Typography>

				<Typography variant="body2">{description}</Typography>

				{error ? (
					<Button variant="contained" className={classes.modal__button} size="large" onClick={handleOnClick}>
						{button}
					</Button>
				) : (
					<Link to={redirectTo} style={{ textDecoration: 'none' }}>
						<Button variant="contained" className={classes.modal__button} size="large">
							{button}
						</Button>
					</Link>
				)}
			</Box>
		</ModalHelper>
	);
};

AlertModal.propTypes = {
	error: PropTypes.bool,
	button: PropTypes.string.isRequired,
	redirectTo: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	props: PropTypes.object,
};

export default AlertModal;
