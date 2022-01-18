import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { DRAWER_WIDTH } from './constants';
import DashboardSidebarHeader from './DashboardSidebarHeader';
import DashboardSidebarMenuItems from './DashboardSidebarMenuItems';

const useStyles = makeStyles((theme) => ({
	sidebar: {
		width: DRAWER_WIDTH,
		minHeight: '100vh',
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: DRAWER_WIDTH,
			background: theme.palette.primary.main,
			color: theme.palette.typography.light,
		},
	},
}));

const DashboardSidebar = ({ open = true }) => {
	const classes = useStyles();

	return (
		<Drawer className={classes.sidebar} variant="persistent" anchor="left" open={open}>
			<DashboardSidebarHeader />
			<Divider />
			<DashboardSidebarMenuItems />
		</Drawer>
	);
};

export default DashboardSidebar;
