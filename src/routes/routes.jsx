import { lazy } from 'react';
import NotFoundPage from '../pages/404/NotFoundPage';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import SignIn from '../pages/Signin/SignIn';
import BusinessSignUp from '../pages/Signup/BusinessSignup';
import IndividualSignUp from '../pages/Signup/IndividualSignup';
import SignUp from '../pages/Signup/SignUp';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const AllShipments = lazy(() => import('../pages/Shipments/AllShipments'));
const CreateNewShipment = lazy(() => import('../pages/Shipments/CreateNewShipment'));
const ShipmentDetails = lazy(() => import('../pages/Shipments/ShipmentDetails'));
const ShipmentDetailsPreview = lazy(() => import('../pages/Shipments/PreviewFormData'));
const Products = lazy(() => import('../pages/Products/Products'));
const CreateNewProducts = lazy(() => import('../pages/Products/CreateNewProducts'));
const EditProduct = lazy(() => import('../pages/Products/EditProduct'));
const PickupLocations = lazy(() => import('../pages/Location/PickupLocation/PickupLocations'));
const CreatePickupLocation = lazy(() => import('../pages/Location/PickupLocation/CreatePickupLocation'));
const EditPickupLocation = lazy(() => import('../pages/Location/PickupLocation/EditPickupLocation'));
const PickupLocationDetails = lazy(() => import('../pages/Location/PickupLocation/PickupLocationDetails'));
const ReceiverLocations = lazy(() => import('../pages/Location/ReceiverLocation/ReceiverLocations'));
const CreateReceiverLocation = lazy(() => import('../pages/Location/ReceiverLocation/CreateReceiverLocation'));
const EditReceiverLocation = lazy(() => import('../pages/Location/ReceiverLocation/EditReceiverLocation'));
const ReceiverLocationDetails = lazy(() => import('../pages/Location/ReceiverLocation/ReceiverLocationDetails'));
const TransactionHistories = lazy(() => import('../pages/Transaction/TransactionHistories'));
const TransactionHistoryDetails = lazy(() => import('../pages/Transaction/TransactionHistoryDetails'));
const AllIssues = lazy(() => import('../pages/Support/AllIssues'));
const CreateIssue = lazy(() => import('../pages/Support/CreateIssue'));
const Issue = lazy(() => import('../pages/Support/Issue'));
const AllNotifications = lazy(() => import('../pages/Notification/AllNotifications'));
const UserProfile = lazy(() => import('../pages/Profile/UserProfile'));
const EditUserProfile = lazy(() => import('../pages/Profile/EditUserProfile'));
const ChangePassword = lazy(() => import('../pages/ChangePassword/ChangePassword'));
const AllApiTokens = lazy(() => import('../pages/Token/AllApiTokens'));
const CreateApiToken = lazy(() => import('../pages/Token/CreateApiToken'));
const ApiTokenView = lazy(() => import('../pages/Token/ApiTokenView'));

const routes = [
	// unauthenticated pages
	{
		path: '/',
		exact: true,
		component: SignIn,
		name: 'SignIn',
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
	{
		path: '/forgot-password',
		exact: true,
		component: ForgotPassword,
		name: 'ForgotPassword',
		protected: false,
	},
	{
		path: '/reset-password/:token',
		exact: true,
		component: ResetPassword,
		name: 'ResetPassword',
		protected: false,
	},
	// Dashboard pages
	{
		path: '/dashboard',
		exact: true,
		component: Dashboard,
		name: 'Dashboard',
		protected: true,
	},
	{
		path: '/shipments',
		exact: true,
		component: AllShipments,
		name: 'AllShipments',
		protected: true,
	},
	{
		path: '/shipments/:id',
		exact: true,
		component: ShipmentDetails,
		name: 'ShipmentDetails',
		protected: true,
	},
	{
		path: '/new-shipment',
		exact: true,
		component: CreateNewShipment,
		name: 'CreateNewShipment',
		protected: true,
	},
	{
		path: '/new-shipment/preview',
		exact: true,
		component: ShipmentDetailsPreview,
		name: 'ShipmentDetailsPreview',
		protected: true,
	},
	{
		path: '/products',
		exact: true,
		component: Products,
		name: 'Products',
		protected: true,
	},
	{
		path: '/products/new',
		exact: true,
		component: CreateNewProducts,
		name: 'CreateNewProducts',
		protected: true,
	},
	{
		path: '/products/edit/:id',
		exact: true,
		component: EditProduct,
		name: 'EditProduct',
		protected: true,
	},
	{
		path: '/locations/pickup',
		exact: true,
		component: PickupLocations,
		name: 'PickupLocations',
		protected: true,
	},
	{
		path: '/locations/pickup/new',
		exact: true,
		component: CreatePickupLocation,
		name: 'CreatePickupLocation',
		protected: true,
	},
	{
		path: '/locations/pickup/:id/edit',
		exact: true,
		component: EditPickupLocation,
		name: 'EditPickupLocation',
		protected: true,
	},
	{
		path: '/locations/pickup/:id',
		exact: true,
		component: PickupLocationDetails,
		name: 'PickupLocationDetails',
		protected: true,
	},
	{
		path: '/locations/receiver',
		exact: true,
		component: ReceiverLocations,
		name: 'ReceiverLocations',
		protected: true,
	},
	{
		path: '/locations/receiver/new',
		exact: true,
		component: CreateReceiverLocation,
		name: 'CreateReceiverLocation',
		protected: true,
	},
	{
		path: '/locations/receiver/:id/edit',
		exact: true,
		component: EditReceiverLocation,
		name: 'CreatePickupLocation',
		protected: true,
	},
	{
		path: '/locations/receiver/:id',
		exact: true,
		component: ReceiverLocationDetails,
		name: 'ReceiverLocationDetails',
		protected: true,
	},
	{
		path: '/transactions',
		exact: true,
		component: TransactionHistories,
		name: 'TransactionHistories',
		protected: true,
	},
	{
		path: '/transactions/:id',
		exact: true,
		component: TransactionHistoryDetails,
		name: 'TransactionHistoryDetails',
		protected: true,
	},
	{
		path: '/supports',
		exact: true,
		component: AllIssues,
		name: 'AllIssues',
		protected: true,
	},
	{
		path: '/supports/new',
		exact: true,
		component: CreateIssue,
		name: 'CreateIssue',
		protected: true,
	},
	{
		path: '/supports/:id',
		exact: true,
		component: Issue,
		name: 'Issue',
		protected: true,
	},
	// Header menu
	{
		path: '/notifications',
		exact: true,
		component: AllNotifications,
		name: 'AllNotifications',
		protected: true,
	},
	{
		path: '/profile',
		exact: true,
		component: UserProfile,
		name: 'UserProfile',
		protected: true,
	},
	{
		path: '/profile/edit',
		exact: true,
		component: EditUserProfile,
		name: 'EditUserProfile',
		protected: true,
	},
	{
		path: '/change-password',
		exact: true,
		component: ChangePassword,
		name: 'ChangePassword',
		protected: true,
	},
	{
		path: '/tokens',
		exact: true,
		component: AllApiTokens,
		name: 'AllApiTokens',
		protected: true,
	},
	{
		path: '/tokens/new',
		exact: true,
		component: CreateApiToken,
		name: 'CreateApiToken',
		protected: true,
	},
	{
		path: '/tokens/:id',
		exact: true,
		component: ApiTokenView,
		name: 'ApiTokenView',
		protected: true,
	},
	// static pages
	{
		path: '*',
		exact: true,
		component: NotFoundPage,
		name: 'NotFoundPage',
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
