import NotesIcon from '@mui/icons-material/Notes';
import { lazy } from 'react';
import NotFoundPage from '../pages/404/NotFoundPage';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import SignIn from '../pages/Signin/SignIn';
import BusinessSignUp from '../pages/Signup/Business/BusinessSignup';
import IndividualSignUp from '../pages/Signup/Individual/IndividualSignup';
import SignUp from '../pages/Signup/SignUp';

const DashboardPage = lazy(() => import('../pages/Dashboard/Dashboard'));
const AllShipments = lazy(() => import('../pages/Shipments/AllShipments'));
const PickupLocationPage = lazy(() => import('../pages/Location/PickupLocation/PickupLocations'));
const AddPickupLocation = lazy(() => import('../pages/Location/PickupLocation/CreatePickupLocation'));
const PickupLocationDetails = lazy(() => import('../pages/Location/PickupLocation/PickupLocationDetails'));
const ReceiverLocationPage = lazy(() => import('../pages/Location/ReceiverLocation/ReceiverLocations'));
const AddReceiverLocation = lazy(() => import('../pages/Location/ReceiverLocation/CreateReceiverLocation'));
const ReceiverLocationDetails = lazy(() => import('../pages/Location/ReceiverLocation/ReceiverLocationDetails'));

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
		path: '/receiver-location',
		exact: true,
		component: ReceiverLocationPage,
		name: 'ReceiverLocationPage',
		protected: true,
	},
	{
		path: '/receiver-location/add',
		exact: true,
		component: AddReceiverLocation,
		name: 'AddReceiverLocation',
		protected: true,
	},
	{
		path: '/receiver-location/:id',
		exact: true,
		component: ReceiverLocationDetails,
		name: 'ReceiverLocationDetails',
		protected: true,
	},
	{
		path: '/pickup-location',
		exact: true,
		component: PickupLocationPage,
		name: 'PickupLocationPage',
		protected: true,
	},
	{
		path: '/pickup-location/add',
		exact: true,
		component: AddPickupLocation,
		name: 'AddPickupLocation',
		protected: true,
	},
	{
		path: '/pickup-location/:id',
		exact: true,
		component: PickupLocationDetails,
		name: 'PickupLocationDetails',
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
	// Dashboard pages
	{
		path: '/dashboard',
		exact: true,
		component: DashboardPage,
		name: 'DashboardPage',
		icon: NotesIcon,
		protected: true,
	},
	{
		path: '/all-shipments',
		exact: true,
		component: AllShipments,
		name: 'AllShipments',
		icon: NotesIcon,
		protected: true,
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
