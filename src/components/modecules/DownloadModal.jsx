/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import ModalHelper from '../atoms/ModalHelper';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
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

const DownloadModal = ({ title = '', description = '', ...props }) => {
	const classes = useStyles();

	return (
		<ModalHelper {...props}>
			<Box className={classes.modal}>
				<Box className={classes['modal__success--box']}>
					<FileDownloadOutlinedIcon className={classes.modal__icon} />
				</Box>

				<Typography variant="h6">{title}</Typography>

				<Typography variant="body2">{description}</Typography>

				<Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
					<Button variant="contained" color="error" size="large" onClick={() => props.closeModal(false)}>
						Cancel
					</Button>

					<Button variant="contained" color="primary" className={classes.modal__button} size="large">
						Confirm
					</Button>
				</Box>
			</Box>
		</ModalHelper>
	);
};

DownloadModal.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	// eslint-disable-next-line react/forbid-prop-types
	props: PropTypes.object,
};

export default DownloadModal;
