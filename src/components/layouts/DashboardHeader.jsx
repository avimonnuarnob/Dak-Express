import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Box, Tooltip } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import Language from '../modecules/Language';
import { DRAWER_WIDTH } from './constants';
import DashboardProfileMenuItem from './DashboardProfileMenuItem';

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${DRAWER_WIDTH}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: DRAWER_WIDTH,
	}),
}));

const useStyles = makeStyles((theme) => ({
	header: {
		position: 'fixed',
	},
	header__toolbar: {
		background: theme.palette.primary.white,
	},
	header__icon: {
		color: theme.palette.primary,
	},
	header__title: {
		color: theme.palette.typography.main,
		marginLeft: '10px !important',
	},
	header__items: {
		position: 'absolute',
		right: 0,
		paddingRight: '10px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header__language: {
		padding: '0 10px',
	},
	header__notification: {
		background: theme.palette.primary.disable,
		color: theme.palette.primary.light,
		borderRadius: 10,
		marginRight: '10px',
	},
	header__profile: {
		height: '36px',
		width: '36px',
		background: theme.palette.primary.disable,
		color: theme.palette.primary.light,
		borderRadius: 10,
	},
}));

const DashboardHeader = ({ toggleDrawer = null, open = true, title = 'Dashboard' }) => {
	const classes = useStyles();

	return (
		<AppBar className={classes.header} open={open}>
			<Toolbar className={classes.header__toolbar}>
				<IconButton className={classes.header__icon} aria-label="open drawer" edge="start" onClick={toggleDrawer}>
					<MenuIcon />
				</IconButton>

				<Typography variant="h6" noWrap className={classes.header__title}>
					{title}
				</Typography>

				<Box className={classes.header__items}>
					<Box className={classes.header__language}>
						<Language lightText={false} />
					</Box>

					<Box className={classes.header__notification}>
						<Tooltip title="Notifications">
							<IconButton>
								<NotificationsActiveOutlinedIcon />
							</IconButton>
						</Tooltip>
					</Box>

					<Box>
						<DashboardProfileMenuItem />
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default DashboardHeader;
