/* eslint-disable prettier/prettier */
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import SearchBar from '../../../components/atoms/SearchBar';

const AllApiTokensHeader = () => {
	const {t} = useTranslation()
	return  (
		<>
			<Box
				sx={{
					display: { xs: 'block', sm: 'flex' },
					alignItems: 'center',
				}}
			>
				<HeaderTitle label={t('api-tokens-header')} />
	
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
						{t('create-api-token')}
					</Button>
				</Link>
			</Box>
		</>
	)
}

export default AllApiTokensHeader;
