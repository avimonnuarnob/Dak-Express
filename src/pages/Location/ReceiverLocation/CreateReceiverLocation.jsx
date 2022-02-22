import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
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
		<Box sx={{ py: 2, px: 5 }}>
			<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
				<HeaderTitle label={t('add-new-receiver-location')} />
				<BackButton redirectTo="/locations/receiver" label={t('back-to-receiver-locations')} />
			</Box>
			<ReceiverLocationForm />
		</Box>
	);
};

export default CreateReceiverLocation;
