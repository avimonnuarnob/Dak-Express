import { Box } from '@mui/material';
import { useEffect } from 'react';
import PageTitlebar from '../../components/modecules/PageTitlebar';
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
		<Box sx={{ py: 1, px: 1 }}>
			<PageTitlebar title="Create API Token" />

			<Box sx={{ mt: 2, px: 2, borderRadius: 3 }}>
				<CreateApiTokenBody />
			</Box>
		</Box>
	);
};

export default CreateApiToken;
