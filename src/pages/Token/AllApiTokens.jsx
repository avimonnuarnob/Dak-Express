import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import AllApiTokensHeader from './parts/AllApiTokensHeader';
import AllApiToknesTable from './parts/AllApiTokensTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Tokens', link: 'tokens', current: true },
];

const AllApiTokens = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<AllApiTokensHeader />

			<Box sx={{ mt: 3 }}>
				<AllApiToknesTable />
			</Box>
		</Box>
	);
};

export default AllApiTokens;
