import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import TransactionHistoryHeader from './parts/TransactionHistoryHeader';
import TransactionHistoryTable from './parts/TransactionHistoryTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Transactions', link: 'transactions', current: true },
];

const TransactionHistories = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Box sx={{ p: 3 }}>
				<TransactionHistoryHeader />
			</Box>
			<Box sx={{ mt: 3, borderRadius: 3, overflow: 'scroll', px: 3 }}>
				<TransactionHistoryTable />
			</Box>
		</>
	);
};

export default TransactionHistories;
