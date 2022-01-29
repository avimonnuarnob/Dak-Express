import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { BaseLayout } from './components/layouts/BaseLayout';
import { LanguageProvider } from './contexts/LanguageContext';
import theme from './theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<LanguageProvider>
			<Router>
				<BaseLayout />
			</Router>
		</LanguageProvider>
	</ThemeProvider>
);

export default App;
