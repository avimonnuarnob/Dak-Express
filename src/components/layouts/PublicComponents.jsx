import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './constants';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
	main: {
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
		background: theme.palette.primary.sec,
		[theme.breakpoints.down('md')]: {
			minHeight: `100vh`,
		},
	},
}));

const PublicComponents = () => {
	const classes = useStyles();

	return (
		<>
			<Header />
			<Box component="main" className={classes.main}>
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default PublicComponents;
