/* eslint-disable prettier/prettier */
import { Box, Button } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import SearchBar from '../../../components/atoms/SearchBar';

const AllIssuesHeader = () => (
	<>
		<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
			<HeaderTitle label="Support" />
			<BackButton />
		</Box>

		<Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
			<Box sx={{ width: { sm: '250px' } }}>
				<SearchBar />
			</Box>

			<Button
				variant="contained"
				color="secondary"
				sx={{ ml: 'auto !important', px: 5, py: 2 }}
			>
				Get Support
			</Button>
		</Box>
	</>
);

export default AllIssuesHeader;
