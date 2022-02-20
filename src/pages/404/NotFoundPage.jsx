import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../components/layout/constants';

const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important`,

		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: '#e5e5e5',
	},
}));

const NotFoundPage = () => {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<Box sx={{ width: '40%' }}>
				<Typography variant="h4" fontWeight={600} color="typography.main">
					Page Not Found!
				</Typography>
				<Typography color="typography.main" pt={2}>
					Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
					spelling.
				</Typography>
				<Box sx={{ fontSize: '10rem', fontWeight: '700', lineHeight: '12rem', fontFamily: 'inter', py: 2 }}>
					<Typography variant="span" color="secondary.main">
						4
					</Typography>
					<Typography variant="span" color="status.pending">
						0
					</Typography>
					<Typography variant="span" color="secondary.main">
						4
					</Typography>
				</Box>
				<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
					<Button variant="contained" color="secondary" sx={{ px: 4, py: 2 }}>
						Go to login
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default NotFoundPage;
