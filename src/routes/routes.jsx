import NotesIcon from '@mui/icons-material/Notes';
import React from 'react';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import ResetPassword from '../pages/reset-password/ResetPassword';
import SignIn from '../pages/signin/SignIn';
import BusinessSignUp from '../pages/signup/business/BusinessSignup';
import IndividualSignUp from '../pages/signup/individual/IndividualSignup';
import SignUp from '../pages/signup/SignUp';

const DashboardPage = React.lazy(() => import('../pages/dashboard'));
// static pages
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const routes = [
	{
		path: '/',
		exact: true,
		component: SignIn,
		name: 'SignIn',
		icon: NotesIcon,
		protected: false,
	},
	{
		path: '/dashboard',
		exact: true,
		component: DashboardPage,
		name: 'DashboardPage',
		icon: NotesIcon,
		protected: true,
	},
	{
		path: '/forgot-password',
		exact: true,
		component: ForgotPassword,
		name: 'ForgotPassword',
		protected: false,
	},
	{
		path: '/reset-password',
		exact: true,
		component: ResetPassword,
		name: 'ResetPassword',
		protected: false,
	},
	{
		path: '/signup',
		exact: true,
		component: SignUp,
		name: 'SignUp',
		protected: false,
	},
	{
		path: '/signup/individual',
		exact: true,
		component: IndividualSignUp,
		name: 'IndividualSignUp',
		protected: false,
	},
	{
		path: '/signup/business',
		exact: true,
		component: BusinessSignUp,
		name: 'BusinessSignUp',
		protected: false,
	},
	// static pages
	{
		path: '*',
		exact: true,
		component: NotFoundPage,
		name: 'NotFoundPage',
		icon: NotesIcon,
		protected: false,
	},
];

export default routes;

// eslint-disable-next-line no-unused-vars
function retry(fn, retriesLeft = 5, interval = 1000) {
	return new Promise((resolve, reject) => {
		fn()
			.then(resolve)
			.catch((error) => {
				setTimeout(() => {
					if (retriesLeft === 1) {
						// reject('maximum retries exceeded');
						reject(error);
						return;
					}

					// Passing on "reject" is the important part
					retry(fn, retriesLeft - 1, interval).then(resolve, reject);
				}, interval);
			});
	});
}
