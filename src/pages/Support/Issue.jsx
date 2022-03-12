import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { issueUrls, methods } from '../../apis/urls';
import useAxios from '../../apis/useAxios';
import ErrorAlert from '../../components/atoms/ErrorAlert';
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
	const [issueData, setIssueData] = useState({});

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
			setIssueData(response.data)
		);
	}, [requestToServerWith, id]);

	return (
		<>
			{loading && <LinearProgress color="secondary" />}

			<ErrorAlert />

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

				{Object.keys(issueData).length ? <IssueDetailsBody issueData={issueData} /> : null}
			</Box>
		</>
	);
};

export default Issue;
