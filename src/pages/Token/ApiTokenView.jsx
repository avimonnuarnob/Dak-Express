import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
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
		<Box sx={{ py: 2, px: 3 }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<HeaderTitle label="API Token Overview" />
				<BackButton redirectTo="/tokens" label="Back to tokens" />
			</Box>

			<Box sx={{ mt: 3 }}>
				<ApiTokenOverViewBody />
			</Box>
		</Box>
	);
};

export default ApiTokenView;
