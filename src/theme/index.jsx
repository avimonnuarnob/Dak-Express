import { createTheme } from '@mui/material/styles';

const freightForwardingColors = {
	root: {},
	primary: {
		main: '#122617',
		sec: '#F3F6F9',
		light: '#688228',
		white: '#FFFFFF',
		disable: '#ECF0E6',
		bluish: '#F8FDFF',
	},
	secondary: {
		main: '#688128',
		sec: '#789C26',
		light: '#688228',
	},
	typography: {
		main: '#282B2B',
		sec: '#688128',
		light: '#EFEFEF',
		nav: '#9AC32B',
		white: '#FFFFFF',
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
