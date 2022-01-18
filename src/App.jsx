import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import PublicComponents from './components/layouts/PublicComponents';
import { LanguageProvider } from './contexts/LanguageContext';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import ResetPassword from './pages/reset-password/ResetPassword';
import SignIn from './pages/signin/SignIn';
import theme from './theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<LanguageProvider>
			<Routes>
				<Route element={<PublicComponents />}>
					<Route path="/" element={<SignIn />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Route>
			</Routes>
		</LanguageProvider>
	</ThemeProvider>
);

export default App;
