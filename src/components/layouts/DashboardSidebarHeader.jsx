import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import brandIconLogo from '../../assets/brand-icon.png';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'center',
}));

const useStyles = makeStyles((theme) => ({
	sidebar: {
		margin: '70px 0 20px 0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	sidebar__logo: {
		width: 148,
		height: 40,
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

const DashboardSidebarHeader = () => {
	const classes = useStyles();

	return (
		<DrawerHeader>
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
		</DrawerHeader>
	);
};

export default DashboardSidebarHeader;
