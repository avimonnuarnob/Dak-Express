import { Box, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import Language from '../modecules/Language';
import { FOOTER_HEIGHT, SMALL_DEVICE_FOOTER_HEIGHT } from './constants';

// ====================== Unauthenticated Footer ======================
const useFooterLinksStyles = makeStyles((theme) => ({
	footer_links_item: {
		color: theme.palette.typography.light,
		padding: '0px 20px',
		'&:hover': { color: theme.palette.status.pending },
		[theme.breakpoints.down('md')]: {
			padding: '5px 10px',
		},
	},
}));

const FooterLinks = () => {
	const { t } = useTranslation();
	const classes = useFooterLinksStyles();

	const footerLinks = [
		{ title: t('links-faqs'), link: 'faqs' },
		{ title: t('links-contact'), link: 'contact-us' },
		{ title: t('links-shipment'), link: 'shipment-charges' },
		{ title: t('links-policy'), link: 'privacy-policy' },
		{ title: t('links-terms'), link: 'terms-conditions' },
	];

	return (
		<>
			{footerLinks.map((item) => (
				<Link key={item?.link} href={`/${item?.link}`}>
					<Typography variant="body2" color="white" className={classes.footer_links_item}>
						{item?.title}
					</Typography>
				</Link>
			))}
		</>
	);
};

const useUnauthenticateFooterStyles = makeStyles((theme) => ({
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

const UnauthenticatedFooter = () => {
	const { t } = useTranslation();
	const classes = useUnauthenticateFooterStyles();

	return (
		<footer>
			<Grid className={classes.footer}>
				<Box className={classes.footer__main}>
					<Box>
						<Typography color="white">
							&copy; {t('year')} {t('company')}
						</Typography>
					</Box>

					<Box component="div" className={classes.footer__links}>
						<FooterLinks />
					</Box>

					<Box className={classes.footer__elements}>
						<Box className={classes.footer__language}>
							<Language />
						</Box>
						<Typography color="white">{t('version')}</Typography>
					</Box>
				</Box>
			</Grid>
		</footer>
	);
};

// ====================== Authenticated Footer ======================
const useAuthenticatedFooter = makeStyles((theme) => ({
	footer: {
		background: theme.palette.primary.white,
		width: `100%`,
		// marginLeft: `${DRAWER_WIDTH}px`,
		// width: `calc(100% - ${DRAWER_WIDTH}px)`,
	},
	footer__main: {
		height: 60,
		padding: '0 30px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	footer__elements: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer__texts: {
		color: theme.palette.typography.main,
	},
}));

const AuthenticatedFooter = () => {
	const { t } = useTranslation();
	const classes = useAuthenticatedFooter();

	return (
		<footer>
			<Grid className={classes.footer} sx={{ boxShadow: 4 }}>
				<Box className={classes.footer__main}>
					<Box>
						<Typography variant="caption" className={classes.footer__texts}>
							&copy; {t('year')} {t('company')}
						</Typography>
					</Box>

					<Box className={classes.footer__elements}>
						<Typography variant="caption" className={classes.footer__texts}>
							{t('version')}
						</Typography>
					</Box>
				</Box>
			</Grid>
		</footer>
	);
};

const Footer = ({ auth = false }) => (auth ? <AuthenticatedFooter /> : <UnauthenticatedFooter />);

export default Footer;
