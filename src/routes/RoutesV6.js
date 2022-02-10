import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from '../components/layout/BaseLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import SignIn from '../pages/Signin/SignIn';
import BusinessSignup from '../pages/Signup/BusinessSignup';
import IndividualSignup from '../pages/Signup/IndividualSignup';
import SignUp from '../pages/Signup/SignUp';

const RoutesV6 = () => (
	<Routes>
		<Route element={<BaseLayout />}>
			<Route index element={<SignIn />} />
			<Route path="signup" element={<SignUp />}>
				<Route path="individual" element={<IndividualSignup />} />
				<Route path="business" element={<BusinessSignup />} />
			</Route>
			<Route path="dashboard" element={<Dashboard />} />
		</Route>
	</Routes>
);

export default RoutesV6;
