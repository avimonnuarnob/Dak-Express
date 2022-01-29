import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import PublicComponents from './components/layouts/PublicComponents';
import { LanguageProvider } from './contexts/LanguageContext';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import ResetPassword from './pages/reset-password/ResetPassword';
import SignIn from './pages/signin/SignIn';
import BusinessSignup from './pages/signup/business/BusinessSignup';
import IndividualSignup from './pages/signup/individual/IndividualSignup';
import SignUp from './pages/signup/SignUp';
import theme from './theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<LanguageProvider>
			<Routes>
				<Route element={<PublicComponents />}>
					<Route index path="/" element={<SignIn />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
					<Route path="reset-password" element={<ResetPassword />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="signup/individual" element={<IndividualSignup />} />
					<Route path="signup/business" element={<BusinessSignup />} />
				</Route>
			</Routes>
		</LanguageProvider>
	</ThemeProvider>
);

export default App;
