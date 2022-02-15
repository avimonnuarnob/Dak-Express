/* eslint-disable prettier/prettier */
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import SearchBar from '../../../components/atoms/SearchBar';

const AllIssuesHeader = () => (
	<>
		<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
			<HeaderTitle label="Support" />
			<BackButton />
		</Box>

		<Box
			sx={{
				mt: 3,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Box sx={{ width: { sm: '250px' } }}>
				<SearchBar />
			</Box>

			<Link
				to="/supports/new"
				style={{ textDecoration: 'none', color: 'inherit' }}
			>
				<Button variant="contained" color="secondary" sx={{ px: 5, py: 2 }}>
					Get Support
				</Button>
			</Link>
		</Box>
	</>
);

export default AllIssuesHeader;
