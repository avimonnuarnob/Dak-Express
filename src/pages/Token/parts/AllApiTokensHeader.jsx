/* eslint-disable prettier/prettier */
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import SearchBar from '../../../components/atoms/SearchBar';

const AllApiTokensHeader = () => (
	<>
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="My API Token" />

			<BackButton />
		</Box>
		<Box
			sx={{
				mt: 3,
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Box sx={{ width: '250px' }}>
				<SearchBar />
			</Box>

			<Link to="/tokens/new" style={{ textDecoration: 'none' }}>
				<Button variant="contained" color="secondary" sx={{ px: 3, py: 1 }}>
					Create API Token
				</Button>
			</Link>
		</Box>
	</>
);

export default AllApiTokensHeader;
