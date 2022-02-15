/* eslint-disable react/jsx-no-useless-fragment */
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';

const ProtectedRoute = ({ children = null, redirectTo = '' }) => {
	const { state: isAuthenticated } = useAuthToken();
	return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const AuthenticatedAndNotProtectedRoute = ({ children = null, isProtected = false, redirectTo = '' }) => {
	const { state: isAuthenticated } = useAuthToken();
	return !isProtected && isAuthenticated ? <Navigate to={redirectTo} /> : children;
};

const routeConfig = (routes) => {
	if (!routes) return <div />;

	window.scrollTo(0, 0);

	return (
		<Routes>
			{routes?.map((route) => (
				<Route
					key={route.name}
					path={route.path}
					element={
						route?.protected ? (
							<ProtectedRoute redirectTo="/">
								<route.component />
							</ProtectedRoute>
						) : (
							<AuthenticatedAndNotProtectedRoute isProtected={route?.protected} redirectTo="/dashboard">
								<route.component />
							</AuthenticatedAndNotProtectedRoute>
						)
					}
				/>
			))}
		</Routes>
	);
};

export default routeConfig;
