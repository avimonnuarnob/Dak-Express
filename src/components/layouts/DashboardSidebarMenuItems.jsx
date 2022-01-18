import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	item: {
		marginBottom: '15px',
	},
	divider: {
		background: theme.palette.typography.light,
		opacity: '0.2',
	},
	link__title: {
		color: `${theme.palette.typography.nav} !important`,
		marginLeft: '15px !important',
	},
	link__icon: {
		color: `${theme.palette.typography.light} !important`,
	},
}));

const DashboardSidebarMenuItems = () => {
	const classes = useStyles();

	return (
		<Box sx={{ fontSize: '14px !important' }}>
			<Box className={classes.item}>
				<Typography variant="button" color="initial" className={classes.link__title}>
					General
				</Typography>

				<Divider className={classes.divider} variant="middle" />

				<List>
					<ListItem button>
						<ListItemIcon className={classes.link__icon}>
							<DashboardOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Dashboard</ListItemText>
					</ListItem>
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

export default DashboardSidebarMenuItems;
