import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ApiTokenOverViewBody from './parts/ApiTokenOverViewBody';

const ApiTokenView = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { id } = useParams();

	const breadcrumbs = [
		{ title: 'Dashboard', link: 'dashboard' },
		{ title: 'Tokens', link: 'tokens' },
		{ title: id, link: `tokens/${id}`, current: true },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 1, px: 1 }}>
			<PageTitlebar title="API Token Overview" />

			<Box sx={{ mt: 2, px: 2, borderRadius: 3 }}>
				<ApiTokenOverViewBody />
			</Box>
		</Box>
	);
};

export default ApiTokenView;
