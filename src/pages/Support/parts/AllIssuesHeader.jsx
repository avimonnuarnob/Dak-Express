import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SearchBar from '../../../components/atoms/SearchBar';
import PageTitlebar from '../../../components/modecules/PageTitlebar';

const AllIssuesHeader = () => {
	const { t } = useTranslation();
	return (
		<>
			<PageTitlebar title={t('supports-header')} link="/locations/pickup" page={t('back-to-dashboard')} />

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
