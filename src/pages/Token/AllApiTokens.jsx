/* eslint-disable prettier/prettier */
import { Box } from '@mui/material';
import AllApiTokensHeader from './parts/AllApiTokensHeader';
import AllApiToknesTable from './parts/AllApiTokensTable';

const AllApiTokens = () => (
	<Box
		sx={{
			py: 1,
			px: 1,
		}}
	>
		<AllApiTokensHeader />
		<Box
			sx={{
				mt: 2,
				borderRadius: 3,
				overflow: 'scroll',
			}}
		>
			<AllApiToknesTable />
		</Box>
	</Box>
);

export default AllApiTokens;
