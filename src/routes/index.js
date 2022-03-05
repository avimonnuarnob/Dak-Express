/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';
import useError from '../hooks/useError';
import { removeError } from '../reducers/ErrorReducer';

const ProtectedRoute = ({ children = null, redirectTo = '' }) => {
	const { state: isAuthenticated } = useAuthToken();
	return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const AuthenticatedAndNotProtectedRoute = ({ children = null, isProtected = false, redirectTo = '' }) => {
	const { state: isAuthenticated } = useAuthToken();
	return !isProtected && isAuthenticated ? <Navigate to={redirectTo} /> : children;
};

const routeConfig = (routes) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { _, dispatch } = useError();
	if (!routes) return <div />;

	// window.scrollTo(0, 0);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const location = useLocation();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		dispatch(removeError());
	}, [dispatch, location]);

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
