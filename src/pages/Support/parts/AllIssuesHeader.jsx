import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import SearchBar from '../../../components/atoms/SearchBar';

const AllIssuesHeader = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label={t('supports-header')} />
				<BackButton label={t('back-to-dashboard')} />
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

				<Link to="/supports/new" style={{ textDecoration: 'none', color: 'inherit' }}>
					<Button variant="contained" color="secondary" sx={{ px: 3, py: 1 }}>
						{t('get-support')}
					</Button>
				</Link>
			</Box>
		</>
	);
};

export default AllIssuesHeader;
