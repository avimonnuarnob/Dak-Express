import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitlebar from '../../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import ReceiverLocationForm from './parts/ReceiverLocationForm';

const CreateReceiverLocation = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('receiver-locations'), link: 'locations/receiver' },
			{ title: t('add-new-receiver-location'), link: 'locations/receiver/new', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar
				title={t('add-new-receiver-location')}
				link="/locations/receiver"
				page={t('back-to-receiver-locations')}
			/>
			<ReceiverLocationForm />
		</Box>
	);
};

export default CreateReceiverLocation;
