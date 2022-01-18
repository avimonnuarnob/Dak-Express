import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import { DRAWER_WIDTH, FOOTER_HEIGHT, HEADER_HEIGHT, SMALL_DEVICE_FOOTER_HEIGHT } from './constants';
import DashboardFooter from './DashboardFooter';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';

const MainContentLayout = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	flexGrow: 1,
	minHeight: `calc(100vh - 128px)`,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: -DRAWER_WIDTH,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

const useStyles = makeStyles((theme) => ({
	main: {
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
		padding: 10,
		[theme.breakpoints.down('md')]: {
			minHeight: `calc(100vh - ${HEADER_HEIGHT + SMALL_DEVICE_FOOTER_HEIGHT}px)`,
		},
	},
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

const ProtectedComponents = ({ children = null, title = '' }) => {
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => setOpen((prevState) => !prevState);
	const classes = useStyles();

	return (
		<Box sx={{ display: 'flex' }}>
			<DashboardHeader toggleDrawer={toggleDrawer} open={open} title={title} />
			<DashboardSidebar open={open} />

			<MainContentLayout open={open}>
				<DrawerHeader />
				<Box className={classes.main}>{children}</Box>
				<DashboardFooter />
			</MainContentLayout>
		</Box>
	);
};

ProtectedComponents.propTypes = {
	children: PropTypes.elementType.isRequired,
	title: PropTypes.string.isRequired,
};

export default ProtectedComponents;
