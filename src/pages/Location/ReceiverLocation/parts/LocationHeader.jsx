/* eslint-disable arrow-body-style */
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SearchBar from '../../../../components/atoms/SearchBar';
import PageTitleBar from '../../../../components/modecules/PageTitlebar';

const LocationHeader = () => {
	const { t } = useTranslation();
	return (
		<>
			<PageTitleBar title={t('receiver-locations')} page={t('back-to-dashboard')} />

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

				<Link to="/locations/receiver/new" style={{ textDecoration: 'none' }}>
					<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1 }} startIcon={<AddOutlinedIcon />}>
						{t('add-new-receiver-location')}
					</Button>
				</Link>
			</Box>
		</>
	);
};

export default LocationHeader;
