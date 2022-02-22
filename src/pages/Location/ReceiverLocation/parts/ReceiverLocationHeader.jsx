/* eslint-disable arrow-body-style */
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackButton from '../../../../components/atoms/BackButton';
import HeaderTitle from '../../../../components/atoms/HeaderTitle';
import SearchBar from '../../../../components/atoms/SearchBar';

const ReceiverLocationHeader = () => {
	const { t } = useTranslation();

	return (
		<>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label={t('receiver-locations')} />
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

				<Link to="/locations/receiver/new" style={{ textDecoration: 'none' }}>
					<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1, ml: 2 }} startIcon={<AddOutlinedIcon />}>
						{t('add-new-receiver-location')}
					</Button>
				</Link>
			</Box>
		</>
	);
};

export default ReceiverLocationHeader;
