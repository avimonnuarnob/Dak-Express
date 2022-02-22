import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import TransactionHistoryDetailsBody from './parts/TransactionHistoryDetailsBody';
import TransactionHistoryDetailsHeader from './parts/TransactionHistoryDetailsHeader';

const TransactionHistoryDetails = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('transactions'), link: 'transactions' },
			{ title: id, link: `transactions/${id}`, current: true },
		],
		[id, t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ p: 3 }}>
			<TransactionHistoryDetailsHeader />
			<TransactionHistoryDetailsBody />
		</Box>
	);
};

export default TransactionHistoryDetails;
