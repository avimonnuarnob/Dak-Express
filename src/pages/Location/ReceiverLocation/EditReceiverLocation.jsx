import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import PageTitlebar from '../../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import ReceiverLocationForm from './parts/ReceiverLocationForm';

const EditReceiverLocation = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('receiver-locations'), link: 'locations/pickup' },
			{ title: id, link: `locations/pickup/${id}/edit`, current: true },
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
				title={t('edit-receiver-location')}
				link="/locations/receiver"
				page={t('back-to-receiver-locations')}
			/>

			<ReceiverLocationForm isEditable />
		</Box>
	);
};

export default EditReceiverLocation;
