import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './constants';

const ProgressBar = () => (
	<Box sx={{ width: '100%', minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px) !important` }}>
		<LinearProgress color="secondary" sx={{ color: (theme) => theme.palette.secondary.sec }} />
	</Box>
);

export default ProgressBar;
