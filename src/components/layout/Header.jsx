/* eslint-disable react/jsx-props-no-spreading */
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Box, Button, Divider, Grid, Tooltip } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import brandIconLogo from '../../assets/dak_express.svg';
import useAuthToken from '../../hooks/useAuthToken';
import { removeAuthToken } from '../../reducers/AuthReducer';
import BreadcrumbItems from '../modecules/BreadcrumbItems';
import Language from '../modecules/Language';
import { DRAWER_WIDTH, HEADER_HEIGHT } from './constants';

// ====================== Unauthenticated Header ======================
const useUnauthenticateHeaderStyles = makeStyles((theme) => ({
	header: {
		background: theme.palette.primary.main,
		width: '100%',
	},
	header__main: {
		height: HEADER_HEIGHT,
		padding: '0px 64px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '0px 15px',
		},
	},
	header__logo: {
		height: 60,
		[theme.breakpoints.down('md')]: {
			width: 136,
			height: 36,
		},
	},
	header__elements: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header__language: {
		width: '200px',
		padding: '0px 30px',
	},
	header__button: {
		height: 50,
		width: 120,
	},
}));

const UnauthenticateHeader = () => {
	const { t } = useTranslation();
	const classes = useUnauthenticateHeaderStyles();

	return (
		<header>
			<Grid className={classes.header}>
				<Box className={classes.header__main}>
					<Box>
						<Link to="/" styles={{ textDecoration: 'none' }}>
							<img src={brandIconLogo} alt="Cityscape Global Limited" className={classes.header__logo} />
						</Link>
					</Box>

					<Box className={classes.header__elements}>
						<Box className={classes.header__language}>
							<Tooltip title="Language">
								<Language lightText />
							</Tooltip>
						</Box>
						<Box>
							<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
								<Button variant="contained" color="secondary" className={classes.header__button}>
									{t('sign-in')}
								</Button>
							</Link>
						</Box>
					</Box>
				</Box>
			</Grid>
		</header>
	);
};

// ====================== Authenticated Header ======================
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

const useAuthenticatedProfileMenuStyles = makeStyles((theme) => ({
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

const ProfileMenuItem = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useAuthToken();

	const navigateTo = useNavigate();
	const open = Boolean(anchorEl);
	const classes = useAuthenticatedProfileMenuStyles();

	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const handleLogout = () => {
		dispatch(removeAuthToken());
		navigateTo('/');
	};

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
						height: 230,
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
				<Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
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
									{t('company-type')}
								</Typography>
								<Typography variant="caption" className={classes.account__info__text}>
									{t('company-plan')}
								</Typography>
							</Box>
						</Box>
					</MenuItem>
				</Link>

				<Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
					<MenuItem>
						<Typography variant="body2" className={classes.account__item}>
							{t('links-profile')}
						</Typography>
					</MenuItem>
				</Link>

				<Link to="/change-password" style={{ textDecoration: 'none', color: 'inherit' }}>
					<MenuItem>
						<Typography variant="body2" className={classes.account__item}>
							{t('links-change-password')}
						</Typography>
					</MenuItem>
				</Link>

				<Link to="/tokens" style={{ textDecoration: 'none', color: 'inherit' }}>
					<MenuItem>
						<Typography variant="body2" className={classes.account__item}>
							{t('links-api-token')}
						</Typography>
					</MenuItem>
				</Link>

				<Divider />

				<MenuItem className={classes.account__last__item} onClick={handleLogout}>
					<LockOpenOutlinedIcon fontSize="small" />
					<Typography variant="body2" sx={{ marginLeft: '10px' }}>
						{t('links-sign-out')}
					</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};

const useAuthenticatedHeaderStyles = makeStyles((theme) => ({
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

const AuthenticatedHeader = ({ toggleDrawer = null, open = true }) => {
	const classes = useAuthenticatedHeaderStyles();

	return (
		<AppBar className={classes.header} open={open}>
			<Toolbar className={classes.header__toolbar}>
				<IconButton className={classes.header__icon} aria-label="open drawer" edge="start" onClick={toggleDrawer}>
					<Tooltip title="Toggle Menu">
						<MenuIcon />
					</Tooltip>
				</IconButton>

				<BreadcrumbItems />

				<Box className={classes.header__items}>
					<Box className={classes.header__language}>
						<Tooltip title="Language">
							<Language lightText={false} />
						</Tooltip>
					</Box>

					<Box className={classes.header__notification}>
						<Tooltip title="Notifications">
							<Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
								<IconButton>
									<NotificationsActiveOutlinedIcon />
								</IconButton>
							</Link>
						</Tooltip>
					</Box>

					<Box>
						<ProfileMenuItem />
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

const Header = ({ auth = false, ...props }) => (auth ? <AuthenticatedHeader {...props} /> : <UnauthenticateHeader />);

export default Header;
