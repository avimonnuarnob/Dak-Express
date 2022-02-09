/* eslint-disable prettier/prettier */
import { Box, Button } from '@mui/material';
import SearchBar from '../../../components/atoms/SearchBar';
import PageTitlebar from '../../../components/modecules/PageTitlebar';

const AllApiTokensHeader = () => (
	<Box>
		<PageTitlebar title="My API Token" />
		<Box
			sx={{ display: 'flex', justifyContent: 'space-between', px: 2, py: 3 }}
		>
			<Box sx={{ width: '250px' }}>
				<SearchBar />
			</Box>
			<Button variant="contained" color="secondary" sx={{ px: 3, py: 1 }}>
				Create API Token
			</Button>
		</Box>
	</Box>
);

export default AllApiTokensHeader;
