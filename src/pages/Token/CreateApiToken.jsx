import { Box } from '@mui/material';
import { useEffect } from 'react';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import CreateApiTokenBody from './parts/CreateApiTokenBody';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Tokens', link: 'tokens' },
	{ title: 'Create New Token', link: 'tokens/new', current: true },
];

const CreateApiToken = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<HeaderTitle label="Create API Token" />
				<BackButton redirectTo="/tokens" label="Back to tokens" />
			</Box>

			<Box sx={{ mt: 3 }}>
				<CreateApiTokenBody />
			</Box>
		</Box>
	);
};

export default CreateApiToken;
