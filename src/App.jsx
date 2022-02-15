import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import { AuthProvider } from './contexts/AuthContext';
import { BreadcrumbProvider } from './contexts/BreadcrumbContext';
import { LanguageProvider } from './contexts/LanguageContext';
import theme from './theme';

const browserHistory = createBrowserHistory();

const App = () => (
	<ThemeProvider theme={theme}>
		<LanguageProvider>
			<AuthProvider>
				<BreadcrumbProvider>
					<BrowserRouter history={browserHistory}>
						<BaseLayout />
					</BrowserRouter>
				</BreadcrumbProvider>
			</AuthProvider>
		</LanguageProvider>
	</ThemeProvider>
);

export default App;
