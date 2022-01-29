/* eslint-disable react/jsx-no-useless-fragment */
import { Route, Routes } from 'react-router-dom';

const routeConfig = (routes) => {
	if (!routes) return <div />;

	window.scrollTo(0, 0);

	return (
		<Routes>
			{routes?.map((route) => (
				<Route key={route.name} exact path={route.path} element={<route.component />} />
			))}
		</Routes>
	);
};

export default routeConfig;
