import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const DashboardHeader = ({ handleDrawerToggle = null, drawerWidth = 280 }) => (
	<AppBar
		position="fixed"
		sx={{
			width: { sm: `calc(100% - ${drawerWidth}px)` },
			ml: { sm: `${drawerWidth}px` },
		}}
	>
		<Toolbar>
			<IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: 'block' }}>
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" noWrap component="div">
				Responsive drawer
			</Typography>
		</Toolbar>
	</AppBar>
);

export default DashboardHeader;
