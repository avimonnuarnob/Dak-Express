import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import CopyToClipboard from '../../components/modecules/CopyToClipboard';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ShipmentDetailsBody from './parts/ShipmentDetailsBody';

const ShipmentDetails = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('all-shipments'), link: 'shipments' },
			{ title: id, link: `shipments/${id}`, current: true },
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
					<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
						<Typography variant="h4" fontWeight="bold" color="primary">
							{t('shipment-details')}:
						</Typography>

						<CopyToClipboard copyText="KLM7642138">
							<Typography variant="h4" fontWeight="bold" color="secondary">
								KLM7642138
							</Typography>
						</CopyToClipboard>

						<Chip size="small" label={t('send-a-package')} color="secondary" />
					</Box>
				}
				link="/shipments"
				page={t('back-to-shipments')}
			/>

			<ShipmentDetailsBody />
		</Box>
	);
};

export default ShipmentDetails;
