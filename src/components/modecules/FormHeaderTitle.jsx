import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	border: {
		borderBottom: `2px solid ${theme.palette.secondary.sec}`,
	},
	text: {
		marginBottom: '10px !important',
		color: theme.palette.status.pending,
	},
}));

const FormHeaderTitle = ({ formTitle = '', noDivider = false, children = null }) => {
	const classes = useStyles();

	if (noDivider) {
		return (
			<>
				<Typography fontSize="24px" fontWeight="bold" className={classes.text}>
					{formTitle}
				</Typography>
				<Box>{children}</Box>
			</>
		);
	}

	return (
		<Box className={classes.border} mb={3}>
			<Typography fontSize="24px" fontWeight="bold" className={classes.text}>
				{formTitle}
			</Typography>

			<Box>{children}</Box>
		</Box>
	);
};

FormHeaderTitle.propTypes = {
	formTitle: PropTypes.string.isRequired,
};

export default FormHeaderTitle;
