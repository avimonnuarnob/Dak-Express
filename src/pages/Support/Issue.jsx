import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import IssueDetailsBody from './parts/IssueDetailsBody';
import IssueDetailsHeader from './parts/IssueDetailsHeader';

const FAKE__DATA = {
	S_id: 'KLM7642138',
	FullName: 'Md Rafez Hossain',
	phone: '+880 1324 249011',
	email: 'rafez.hossain@cityscapeglobal.net',
	subject: 'Issue subject here',
	message:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry/'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
	date: '12 Dec 2021',
};

const Issue = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('links-support'), link: 'supports' },
			{ title: id, link: `supports/${id}`, current: true },
		],
		[t, id]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<IssueDetailsHeader />
			<IssueDetailsBody data={FAKE__DATA} />
		</Box>
	);
};

export default Issue;
