import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	titlebar: {
		padding: '10px 20px',
		display: 'flex',
		justifyContent: 'space-between',
		justifyItems: 'center',
	},
	titlebar__title: {
		color: theme.palette.typography.main,
		textAlign: 'center',
	},
	titlebar__link: {
		textDecoration: 'none',
		marginTop: '5px',
	},
	titlebar__items: {
		display: 'flex',
		justifyContent: 'center',
		justifyItems: 'center',
		color: theme.palette.typography.main,
		textTransform: 'none !important',
	},
	titlebar__icon: {},
	titlebar__text: {},
}));

const PageTitlebar = ({ title = 'Dashboard' }) => {
	const classes = useStyles();

	return (
		<Box className={classes.titlebar}>
			<Typography variant="h4" fontWeight={700} className={classes.titlebar__title}>
				{title}
			</Typography>

			<Link to="/dashboard" className={classes.titlebar__link}>
				<Button
					className={classes.titlebar__items}
					startIcon={<ArrowBackIosNewOutlinedIcon fontSize="small" className={classes.titlebar__icon} />}
				>
					<Typography className={classes.titlebar__text}>Back to Dashboard</Typography>
				</Button>
			</Link>
		</Box>
	);
};

PageTitlebar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageTitlebar;
