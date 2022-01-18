import { Box, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import brandIconLogo from '../../assets/brand-icon.png';
import Language from '../modecules/Language';

const useStyles = makeStyles((theme) => ({
	header: {
		background: theme.palette.primary.main,
		width: '100%',
	},
	header__main: {
		height: 64,
		padding: '0px 64px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '0px 15px',
		},
	},
	header__logo: {
		width: 148,
		height: 40,
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
		padding: '0px 30px',
	},
	header__button: {
		height: 50,
		width: 120,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<header>
			<Grid className={classes.header}>
				<Box className={classes.header__main}>
					<Box>
						<img src={brandIconLogo} alt="Cityscape Global Limited" className={classes.header__logo} />
					</Box>

					<Box className={classes.header__elements}>
						<Box className={classes.header__language}>
							<Language lightText />
						</Box>
						<Box>
							<Button variant="contained" color="secondary" className={classes.header__button}>
								SIGN IN
							</Button>
						</Box>
					</Box>
				</Box>
			</Grid>
		</header>
	);
};

export default Header;
