import { Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	footer_links_item: {
		color: theme.palette.typography.light,
		padding: '0px 20px',
		'&:hover': { color: theme.palette.status.pending },
		[theme.breakpoints.down('md')]: {
			padding: '5px 10px',
		},
	},
}));

const footerLinks = [
	{ title: 'FAQs', link: 'faqs' },
	{ title: 'Contact Us', link: 'contact-us' },
	{ title: 'Shipment Charges', link: 'shipment-charges' },
	{ title: 'Privacy Policy', link: 'privacy-policy' },
	{ title: 'Terms & Condiotions', link: 'terms-conditions' },
];

const FooterLinks = () => {
	const classes = useStyles();

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

export default FooterLinks;
