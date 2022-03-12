/* eslint-disable no-unused-vars */
import { Box, LinearProgress } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { issueUrls, methods } from '../../apis/urls';
import useAxios from '../../apis/useAxios';
import ErrorAlert from '../../components/atoms/ErrorAlert';
import Pagination from '../../components/modecules/Pagination';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import AllIssuesHeader from './parts/AllIssuesHeader';
import IssuesTable from './parts/IssuesTable';

const AllIssues = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { t } = useTranslation();
	const [page, setPage] = useState(0);
	const [dataCount, setDataCount] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const [issuesData, setIssuesData] = useState([]);

	const { loading, requestToServerWith } = useAxios();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('support'), link: 'supports', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch, breadcrumbs]);

	useEffect(() => {
		requestToServerWith({
			url: issueUrls.issues,
			method: methods.GET,
			params: { limit: rowsPerPage, offset: rowsPerPage * page },
		}).then((response) => {
			setIssuesData(response?.data?.results || []);
			setDataCount(response?.data?.count);
		});
	}, [requestToServerWith, page, rowsPerPage]);

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			{loading && <LinearProgress color="secondary" />}
			<Box sx={{ py: 2, px: 3 }}>
				<AllIssuesHeader />

				<Box sx={{ mt: 3 }}>
					<ErrorAlert />
					<IssuesTable issuesData={issuesData} page={page} rowsperPage={rowsPerPage} />

					<Box sx={{ py: '10px' }}>
						<Pagination
							data={dataCount}
							page={page}
							rowsPerPage={rowsPerPage}
							handlePageChange={handlePageChange}
							handlePageRowsChange={handlePageRowsChange}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AllIssues;
