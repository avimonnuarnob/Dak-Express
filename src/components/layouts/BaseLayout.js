import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Suspense } from 'react';
import routeConfig from '../../routes';
import routes from '../../routes/routes';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './constants';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
	main: {
		minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
		background: theme.palette.primary.sec,
		[theme.breakpoints.down('md')]: {
			minHeight: `100vh`,
		},
	},
}));

export const BaseLayout = () => {
	const classes = useStyles();

	return (
		<div>
			<Header />
			{/* main section / dynamic section */}
			<main>
				{/* <Suspense fallback={<LoadingComponent />}> */}
				<Suspense fallback="">
					<Box component="main" className={classes.main}>
						{routeConfig(routes)}
					</Box>
				</Suspense>
			</main>
			<Footer />
		</div>
	);
};
