import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import { AuthProvider } from './contexts/AuthContext';
import { BreadcrumbProvider } from './contexts/BreadcrumbContext';
import { LanguageProvider } from './contexts/LanguageContext';
import theme from './theme';

const browserHistory = createBrowserHistory();

const App = () => {
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('language'));
	}, [i18n]);

	return (
		<ThemeProvider theme={theme}>
			<LanguageProvider>
				<AuthProvider>
					<BreadcrumbProvider>
						<HashRouter history={browserHistory}>
							<BaseLayout />
						</HashRouter>
					</BreadcrumbProvider>
				</AuthProvider>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default App;
