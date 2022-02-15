import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import TransactionHistoryDetailsBody from './parts/TransactionHistoryDetailsBody';
import TransactionHistoryDetailsHeader from './parts/TransactionHistoryDetailsHeader';

const TransactionHistoryDetails = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = [
		{ title: 'Dashboard', link: 'dashboard' },
		{ title: 'Transactions', link: 'transactions' },
		{ title: id, link: `transactions/${id}`, current: true },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ p: 3 }}>
			<TransactionHistoryDetailsHeader />
			<TransactionHistoryDetailsBody />
		</Box>
	);
};

export default TransactionHistoryDetails;
