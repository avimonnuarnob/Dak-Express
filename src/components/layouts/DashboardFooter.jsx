import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
		background: theme.palette.primary.white,
		width: '100%',
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

const DashboardFooter = () => {
	const classes = useStyles();

	return (
		<footer>
			<Grid className={classes.footer} sx={{ boxShadow: 4 }}>
				<Box className={classes.footer__main}>
					<Box>
						<Typography variant="caption" className={classes.footer__texts}>
							&copy; 2022 Cityscape Global Ltd.
						</Typography>
					</Box>

					<Box className={classes.footer__elements}>
						<Typography variant="caption" className={classes.footer__texts}>
							Version 1.0.1
						</Typography>
					</Box>
				</Box>
			</Grid>
		</footer>
	);
};

export default DashboardFooter;
