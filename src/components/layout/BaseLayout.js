import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Suspense, useState } from 'react';
import routeConfig from '../../routes';
import routes from '../../routes/routes';
import { DRAWER_WIDTH, FOOTER_HEIGHT, HEADER_HEIGHT } from './constants';
import Footer from './Footer';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Sidebar from './Sidebar';

const MainContentLayout = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	flexGrow: 1,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: 0,
	width: open ? `calc(100vw - ${DRAWER_WIDTH}px)` : `100vw`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: open ? DRAWER_WIDTH : 0,
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

const MainContent = ({ children = null, open = true, auth = false }) => {
	if (auth) {
		return (
			<MainContentLayout open={open}>
				<DrawerHeader />
				{children}
			</MainContentLayout>
		);
	}

	return children;
};

MainContent.propTypes = {
	open: PropTypes.bool.isRequired,
	auth: PropTypes.bool.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,
		background: theme.palette.primary.sec,
		[theme.breakpoints.down('md')]: {
			minHeight: `100vh`,
		},
	},

	// dashboard: {
	// 	minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,
	// 	background: theme.palette.primary.sec,
	// 	[theme.breakpoints.down('md')]: {
	// 		minHeight: `calc(100vh - ${HEADER_HEIGHT + SMALL_DEVICE_FOOTER_HEIGHT}px)`,
	// 	},
	// },
}));

const BaseLayout = () => {
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => setOpen((prevState) => !prevState);

	const auth = localStorage.getItem('auth') || true;
	const classes = useStyles();

	return (
		<>
			<Header auth={auth} toggleDrawer={toggleDrawer} open={open} />
			{auth && <Sidebar open={open} />}

			<MainContent open={open} auth={auth}>
				<>
					<Suspense fallback={<ProgressBar />}>
						<Box className={classes.root}>{routeConfig(routes)}</Box>
					</Suspense>
					<Footer auth={auth} />
				</>
			</MainContent>
		</>
	);
};

export default BaseLayout;
