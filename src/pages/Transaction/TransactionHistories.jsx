import { Box } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import TransactionHistoryHeader from './parts/TransactionHistoryHeader';
import TransactionHistoryTable from './parts/TransactionHistoryTable';

const TransactionHistories = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('transactions'), link: 'transactions', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ px: 3, py: 2 }}>
			<TransactionHistoryHeader />

			<Box sx={{ mt: 3 }}>
				<TransactionHistoryTable />
			</Box>
		</Box>
	);
};

export default TransactionHistories;
