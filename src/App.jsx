import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BaseLayout from './components/layout/BaseLayout';
import { LanguageProvider } from './contexts/LanguageContext';
import theme from './theme';

const browserHistory = createBrowserHistory();
const App = () => (
	<ThemeProvider theme={theme}>
		<LanguageProvider>
			<BrowserRouter history={browserHistory}>
				<BaseLayout />
			</BrowserRouter>
		</LanguageProvider>
	</ThemeProvider>
);

export default App;
