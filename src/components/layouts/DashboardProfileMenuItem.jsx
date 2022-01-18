import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Divider, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	d_flex: {
		display: 'flex',
	},
	account: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		cursor: 'pointer',
	},
	account__iconbutton: {
		'&:hover': { background: 'none' },
	},
	account__info: {
		padding: '20px !important',
		background: `${theme.palette.primary.bluish} !important`,
		cursor: 'default',
	},
	account__info__name: {
		marginLeft: '10px',
		marginBottom: '5px',
		fontWeight: 'bold',
	},
	account__info__type: {
		marginLeft: '10px',
		padding: '0 15px',
		borderRadius: '10px',
		background: theme.palette.secondary.main,
		color: theme.palette.typography.white,
	},
	account__info__text: {
		marginLeft: '10px !important',
		color: theme.palette.typography.main,
	},
	account__item: {
		padding: '0 20px',
	},
	account__last__item: {
		display: 'flex',
		justifyContent: 'center !important',
		alignItems: 'center',
		textAlign: 'center',
		margin: '0 auto',
		color: `${theme.palette.secondary.main} !important`,
	},
}));

const DashboardProfileMenuItem = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const classes = useStyles();

	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<>
			<Box className={classes.account}>
				<IconButton className={classes.account__iconbutton}>
					<Tooltip title="Account settings">
						<Avatar
							variant="rounded"
							onClick={handleClick}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
						>
							<PermIdentityOutlinedIcon />
						</Avatar>
					</Tooltip>
				</IconButton>
			</Box>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						width: 300,
						height: 250,
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 40,
							height: 40,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
			>
				<MenuItem className={classes.account__info}>
					<Box>
						<Avatar variant="rounded">
							<PermIdentityOutlinedIcon />
						</Avatar>
					</Box>

					<Box>
						<Box>
							<Typography variant="body1" className={classes.account__info__name}>
								Mr. Shakil Ahmed
							</Typography>
						</Box>

						<Box className={classes.d_flex}>
							<Typography variant="caption" className={classes.account__info__type}>
								Business
							</Typography>
							<Typography variant="caption" className={classes.account__info__text}>
								Free
							</Typography>
						</Box>
					</Box>
				</MenuItem>

				<MenuItem>
					<Typography variant="body2" className={classes.account__item}>
						Profile
					</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="body2" className={classes.account__item}>
						Change Password
					</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="body2" className={classes.account__item}>
						My API Token
					</Typography>
				</MenuItem>

				<Divider />

				<MenuItem className={classes.account__last__item}>
					<LockOpenOutlinedIcon fontSize="small" />
					<Typography variant="body2" sx={{ marginLeft: '10px' }}>
						Sign Out
					</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};

export default DashboardProfileMenuItem;
