/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	button: {},
	button__edit: {
		width: '100%',
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
	button__view: {
		width: '100%',
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		'&:hover': {
			borderColor: `${theme.palette.secondary.main} !important`,
		},
	},
}));

const ActionButton = ({ Icon, label, sx }) => {
	const classes = useStyles();

	switch (label) {
		case 'Edit':
			return (
				<Button
					size="small"
					variant="outlined"
					className={classes.button__edit}
					startIcon={<EditOutlinedIcon />}
					sx={{ ...sx }}
				>
					{label}
				</Button>
			);

		case 'View':
			return (
				<Button
					size="small"
					variant="outlined"
					className={classes.button__view}
					startIcon={<VisibilityOutlinedIcon />}
					sx={{ ...sx }}
				>
					{label}
				</Button>
			);

		default:
			return (
				<Button
					size="small"
					variant="outlined"
					className={classes.button__view}
					startIcon={<Icon />}
					sx={{ ...sx }}
				>
					{label}
				</Button>
			);
	}
};

ActionButton.propTypes = {
	Icon: PropTypes.elementType,
	label: PropTypes.string.isRequired,
	sx: PropTypes.objectOf(PropTypes.any),
};

ActionButton.defaultProps = {
	sx: {},
	Icon: VisibilityOutlinedIcon,
};
export default ActionButton;
