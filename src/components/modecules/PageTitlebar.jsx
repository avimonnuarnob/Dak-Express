import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	titlebar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	titlebar__title: {
		color: theme.palette.typography.main,
	},
	titlebar__link: {
		textDecoration: 'none',
	},
	titlebar__items: {
		display: 'flex',
		justifyContent: 'center',
		justifyItems: 'center',
		color: theme.palette.typography.main,
		textTransform: 'none !important',
		paddingLeft: '0 !important',
	},
	titlebar__icon: {},
	titlebar__text: {},
}));

const PageTitlebar = ({ title = 'Dashboard', link = '/dashboard', page = 'Dashboard' }) => {
	const classes = useStyles();

	return (
		<Box className={classes.titlebar}>
			{typeof title === 'string' ? (
				<Typography variant="h4" fontWeight={700} className={classes.titlebar__title}>
					{title}
				</Typography>
			) : (
				<Box className={classes.titlebar__title}>{title}</Box>
			)}

			<Link to={link} className={classes.titlebar__link}>
				<Button
					className={classes.titlebar__items}
					startIcon={<ArrowBackIosNewOutlinedIcon fontSize="small" className={classes.titlebar__icon} />}
				>
					<Typography className={classes.titlebar__text}>{page}</Typography>
				</Button>
			</Link>
		</Box>
	);
};

PageTitlebar.propTypes = {
	// eslint-disable-next-line react/require-default-props
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	// eslint-disable-next-line react/require-default-props
	link: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	page: PropTypes.string,
};

export default PageTitlebar;
