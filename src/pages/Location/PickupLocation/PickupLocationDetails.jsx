import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PageTitlebar from '../../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import LocationDetails from './parts/LocationDetails';

const PickupLocationDetails = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('pickup-locations'), link: 'locations/pickup' },
			{ title: id, link: `locations/pickup/${id}`, current: true },
		],
		[id, t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar
				title={
					<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
						<Typography variant="h4" fontWeight="bold" sx={{ color: 'typography.main' }}>
							{t('location')}
						</Typography>
						<Chip label={t('pickup-locations')} color="secondary" size="small" />
					</Box>
				}
				page={t('pickup-locations')}
				link="/locations/pickup"
			/>
			<LocationDetails />
		</Box>
	);
};

export default PickupLocationDetails;
