import { Box } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import AllApiTokensHeader from './parts/AllApiTokensHeader';
import AllApiToknesTable from './parts/AllApiTokensTable';

const AllApiTokens = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('api-token'), link: 'tokens', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch, breadcrumbs]);

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
