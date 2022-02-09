import { Box } from '@mui/material';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import ApiTokenOverViewBody from './parts/ApiTokenOverViewBody';

const ApiTokenView = () => (
	<Box
		sx={{
			py: 1,
			px: 1,
		}}
	>
		<PageTitlebar title="API Token Overview" />
		<Box
			sx={{
				mt: 2,
				px: 2,
				borderRadius: 3,
			}}
		>
			<ApiTokenOverViewBody />
		</Box>
	</Box>
);

export default ApiTokenView;
