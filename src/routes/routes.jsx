import NotesIcon from '@mui/icons-material/Notes';
import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';

// Pages
// const HomePage = React.lazy(() => retry(() => import('../pages/Home')));
// const CategoryPage = React.lazy(() =>
//   retry(() => import('../pages/CategoryPage'))
// );

const LoginPage = React.lazy(() => import('../pages/signin/SignIn'));

// static pages
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const routes = [
	{
		path: '/',
		exact: true,
		component: LoginPage,
		name: 'Login',
		icon: NotesIcon,
		protected: false,
	},
	// {
	// 	path: '/login',
	// 	exact: true,
	// 	component: LoginPage,
	// 	name: 'Login',
	// 	icon: NotesIcon,
	// 	protected: false,
	// },
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
