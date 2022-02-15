import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import theme from './theme';

const browserHistory = createBrowserHistory();

const App = () => (
	<ThemeProvider theme={theme}>
		<LanguageProvider>
			<AuthProvider>
				<BrowserRouter history={browserHistory}>
					<BaseLayout />
				</BrowserRouter>
			</AuthProvider>
		</LanguageProvider>
	</ThemeProvider>
);

export default App;
