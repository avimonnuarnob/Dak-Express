import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	main: {
		minHeight: `calc(100vh - 128px)`,
		[theme.breakpoints.down('md')]: {
			minHeight: `calc(100vh - 184px)`,
		},
	},
}));

const Main = () => {
	const classes = useStyles();

	return (
		<main className={classes.main}>
			<Typography variant="h1" color="initial">
				Freight Forwarding
			</Typography>
		</main>
	);
};

export default Main;
