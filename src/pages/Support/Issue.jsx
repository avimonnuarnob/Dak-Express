import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { issueUrls, methods } from '../../apis/urls';
import useAxios from '../../apis/useAxios';
import CopyToClipboard from '../../components/modecules/CopyToClipboard';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import IssueDetailsBody from './parts/IssueDetailsBody';

const Issue = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();
	const { loading, requestToServerWith } = useAxios();
	const [data, setData] = useState({});

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('support'), link: 'supports' },
			{ title: id, link: `supports/${id}`, current: true },
		],
		[t, id]
	);

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	useEffect(() => {
		requestToServerWith({ url: `${issueUrls.issues}/${id}`, method: methods.GET }).then((response) =>
			setData(response.data)
		);
	}, [requestToServerWith, id]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar
				title={
					<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
						<Typography variant="h4" fontWeight="bold" color="primary">
							{t('issue-id')}:
						</Typography>

						<CopyToClipboard copyText={id}>
							<Typography variant="h4" fontWeight="bold" color="secondary">
								{id}
							</Typography>
						</CopyToClipboard>
					</Box>
				}
				link="/supports"
				page={t('back-to-support')}
			/>
			{!loading ? (
				<IssueDetailsBody data={data} />
			) : (
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
					<CircularProgress color="secondary" />
				</Box>
			)}
		</Box>
	);
};

export default Issue;
