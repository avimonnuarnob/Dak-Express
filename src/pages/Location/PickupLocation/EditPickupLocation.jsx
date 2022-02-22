import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import PickupLocationForm from './parts/PickupLocationForm';

const EditPickupLocation = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('pickup-locations'), link: 'locations/pickup' },
			{ title: id, link: `/locations/pickup/${id}/edit`, current: true },
		],
		[id, t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 5 }}>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label={t('edit-pickup-location')} />
				<BackButton redirectTo="/locations/pickup" label={t('back-to-pickup-locations')} />
			</Box>
			<PickupLocationForm isEditable />
		</Box>
	);
};

export default EditPickupLocation;
