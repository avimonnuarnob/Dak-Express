import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Language from '../modecules/Language';
import { FOOTER_HEIGHT, SMALL_DEVICE_FOOTER_HEIGHT } from './constants';
import FooterLinks from './FooterLinks';

const useStyles = makeStyles((theme) => ({
	footer: {
		background: theme.palette.primary.main,
		width: '100%',
	},
	footer__main: {
		height: FOOTER_HEIGHT,
		padding: '0 100px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '50px 30px',
			minHeight: SMALL_DEVICE_FOOTER_HEIGHT,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '100px 20px',
			minHeight: SMALL_DEVICE_FOOTER_HEIGHT,
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
		width: '200px',
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
