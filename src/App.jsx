import { ThemeProvider } from '@mui/material/styles';
import ResponsiveDrawer from './components/layouts/ResponsiveDrawer';
import ContextProvider from './contexts';
import theme from './theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<ContextProvider>
			<ResponsiveDrawer />
		</ContextProvider>
	</ThemeProvider>
);

export default App;
