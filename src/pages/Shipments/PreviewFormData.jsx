import { Box } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ParcelDetails from './parts/ParcelDetails';
import PickupDetails from './parts/PickupDetails';
import ReceiverDetails from './parts/ReceiverDetails';
import ShipmentDetailsCard from './parts/ShipmentDetailsCard';
import WhoWillPay from './parts/WhoWillPay';

const PreviewFormData = ({ setPreviewData }) => {
	// eslint-disable-next-line no-unused-vars
	const [shipmentData, setShipmentData] = useState(() => JSON.parse(localStorage.getItem('previewShipmentData')));
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('add-new-shipment'), link: 'new-shipment' },
			{ title: t('preview-and-proceed'), link: 'new-shipment/preview', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	// if (!shipmentData) return <CircularProgress color="secondary" />;

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar title={t('create-a-shipment')} link="/shipments" page={t('back-to-shipments')} />

			<Box sx={{ mt: 3 }}>
				<PickupDetails pickup={shipmentData?.pickup} setPreviewData={setPreviewData} edit />
				<ReceiverDetails receiver={shipmentData?.receiver} setPreviewData={setPreviewData} edit />
				<ParcelDetails products={shipmentData?.products} setPreviewData={setPreviewData} edit />
				<ShipmentDetailsCard courier={shipmentData?.courier} setPreviewData={setPreviewData} edit />
				<WhoWillPay edit />
			</Box>
		</Box>
	);
};

export default PreviewFormData;
