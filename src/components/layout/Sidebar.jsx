import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import brandIconLogo from '../../assets/dak_express.svg';
import { DRAWER_WIDTH } from './constants';

const SidebarLayout = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'center',
}));

const useSidebarHeaderStyles = makeStyles((theme) => ({
	sidebar: {
		margin: '70px 0 20px 0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	sidebar__logo: {
		height: 60,
		marginBottom: '20px',
	},
	sidebar__type: {
		width: '100px',
		textAlign: 'center',
		borderRadius: '50px',
		marginBottom: '10px',
		background: theme.palette.secondary.main,
		color: theme.palette.typography.white,
	},
	sidebar__text: {
		color: theme.palette.status.pending,
		paddingTop: '10px',
		textAlign: 'center',
		margin: '0 auto',
	},
}));

const SidebarHeader = () => {
	const classes = useSidebarHeaderStyles();

	return (
		<SidebarLayout>
			<Box className={classes.sidebar}>
				<img src={brandIconLogo} alt="Cityscape Global Limited" className={classes.sidebar__logo} />

				<Box>
					<Typography variant="body1" className={classes.sidebar__type}>
						Business
					</Typography>
					<Typography variant="body2" className={classes.sidebar__text}>
						Free
					</Typography>
				</Box>
			</Box>
		</SidebarLayout>
	);
};

const useSidebarMenuItemStyles = makeStyles((theme) => ({
	item: {
		marginBottom: '15px',
	},
	divider: {
		background: theme.palette.typography.light,
		opacity: '0.2',
	},
	link__item: {
		textDecoration: 'none',
		color: 'inherit',
	},
	link__title: {
		color: `${theme.palette.typography.nav} !important`,
		marginLeft: '15px !important',
	},
	link__icon: {
		color: `${theme.palette.typography.light} !important`,
	},
}));

const SidebarMenuItems = () => {
	const classes = useSidebarMenuItemStyles();

	return (
		<Box sx={{ fontSize: '14px !important' }}>
			<Box className={classes.item}>
				<Typography variant="button" color="initial" className={classes.link__title}>
					General
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<List>
					<Link to="/dashboard" className={classes.link__item}>
						<ListItem button>
							<ListItemIcon className={classes.link__icon}>
								<DashboardOutlinedIcon />
							</ListItemIcon>
							<ListItemText>Dashboard</ListItemText>
						</ListItem>
					</Link>
				</List>
			</Box>

			<Box className={classes.item}>
				<Typography variant="button" color="initial" className={classes.link__title}>
					My Shipment
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<List>
					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<ListAltOutlinedIcon />
						</ListItemIcon>
						<ListItemText>All Shipments</ListItemText>
					</ListItem>

					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<AddToPhotosOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Create A Shipment</ListItemText>
					</ListItem>
				</List>
			</Box>

			<Box className={classes.item}>
				<Typography variant="button" color="initial" className={classes.link__title}>
					Location
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<List>
					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<AddLocationOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Pickup Location</ListItemText>
					</ListItem>

					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<AddLocationAltOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Receiver Location</ListItemText>
					</ListItem>
				</List>
			</Box>

			<Box className={classes.item}>
				<Typography variant="button" color="initial" className={classes.link__title}>
					Payment
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<List>
					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<HistoryOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Transaction History</ListItemText>
					</ListItem>
				</List>
			</Box>

			<Box className={classes.item}>
				<Typography variant="button" color="initial" className={classes.link__title}>
					Support
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<List>
					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<QuizOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Support</ListItemText>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

const useSidebarStyles = makeStyles((theme) => ({
	sidebar: {
		width: DRAWER_WIDTH,
		minHeight: '100%',
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: DRAWER_WIDTH,
			background: theme.palette.primary.main,
			color: theme.palette.typography.light,
		},
	},
}));

const Sidebar = ({ open = true }) => {
	const classes = useSidebarStyles();

	return (
		<Drawer className={classes.sidebar} variant="persistent" anchor="left" open={open}>
			<SidebarHeader />
			<Divider />
			<SidebarMenuItems />
		</Drawer>
	);
};

export default Sidebar;
