import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import AllIssuesHeader from './parts/AllIssuesHeader';
import IssuesTable from './parts/IssuesTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Supports', link: 'supports', current: true },
];

const AllIssues = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<AllIssuesHeader />

			<Box sx={{ mt: 5, borderRadius: 3 }}>
				<IssuesTable />
			</Box>
		</Box>
	);
};

export default AllIssues;
