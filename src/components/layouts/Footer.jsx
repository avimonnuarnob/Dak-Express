import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Language from '../modecules/Language';
import FooterLinks from './FooterLinks';

const useStyles = makeStyles((theme) => ({
	footer: {
		background: theme.palette.primary.main,
		width: '100%',
	},
	footer__main: {
		height: 64,
		padding: '0 100px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '10px 30px',
			height: 120,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	footer__links: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	footer__elements: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	footer__language: {
		padding: '0px 30px',
		[theme.breakpoints.down('md')]: {
			padding: 0,
		},
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<footer>
			<Grid className={classes.footer}>
				<Box className={classes.footer__main}>
					<Box>
						<Typography color="white">&copy; 2022 Cityscape Global Ltd.</Typography>
					</Box>

					<Box component="div" className={classes.footer__links}>
						<FooterLinks />
					</Box>

					<Box className={classes.footer__elements}>
						<Box className={classes.footer__language}>
							<Language />
						</Box>
						<Typography color="white">Version 1.0.1</Typography>
					</Box>
				</Box>
			</Grid>
		</footer>
	);
};

export default Footer;
