import NotesIcon from '@mui/icons-material/Notes';
import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';

// Pages
// const HomePage = React.lazy(() => retry(() => import('../pages/Home')));
// const CategoryPage = React.lazy(() =>
//   retry(() => import('../pages/CategoryPage'))
// );

const SignIn = React.lazy(() => import('../pages/signin/SignIn'));
const SignUp = React.lazy(() => import('../pages/signup/SignUp'));
const IndividualSignUp = React.lazy(() => import('../pages/signup/individual/IndividualSignup'));
const BusinessSignUp = React.lazy(() => import('../pages/signup/business/BusinessSignup'));
const ForgotPassword = React.lazy(() => import('../pages/forgot-password/ForgotPassword'));
const ResetPassword = React.lazy(() => import('../pages/reset-password/ResetPassword'));

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
