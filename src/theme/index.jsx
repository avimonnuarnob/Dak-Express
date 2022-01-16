import { createTheme } from '@mui/material/styles';

const freightForwardingColors = {
	root: {},
	primary: {
		main: '#122617',
		secondary: '#F3F6F9',
		light: '#688228',
	},
	secondary: {
		main: '#688128',
		sec: '#789C26',
		light: '#688228',
	},
	typography: {
		main: '#282B2',
		sec: '#688128',
		light: '#EFEFE',
		nav: '#9AC32B',
	},
	status: {
		success: '#3BB900',
		bgsuccess: '#ECFBE6',
		pending: '#F29339',
		bgpending: '#FFF6E8',
		failed: '#FF333F',
		bgfailed: '#FFE8EC',
	},
};

const theme = createTheme({
	palette: {
		primary: { ...freightForwardingColors.primary },
		secondary: { ...freightForwardingColors.secondary },
		typography: { ...freightForwardingColors.typography },
		status: { ...freightForwardingColors.status },
	},
	typography: {
		fontFamily: ['Inter', 'sans-serif'].join(','),
	},
});

export default theme;
