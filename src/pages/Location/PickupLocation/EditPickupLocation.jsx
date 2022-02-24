import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PageTitlebar from '../../../components/modecules/PageTitlebar';
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
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar title={t('edit-pickup-location')} link="/locations/pickup" page={t('back-to-pickup-locations')} />

			<PickupLocationForm isEditable />
		</Box>
	);
};

export default EditPickupLocation;
