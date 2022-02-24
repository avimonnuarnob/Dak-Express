import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import CreateApiTokenBody from './parts/CreateApiTokenBody';

const CreateApiToken = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('api-token'), link: 'tokens' },
			{ title: t('create-api-token'), link: 'tokens/new', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch, breadcrumbs]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar title={t('token-create')} link="/tokens" page={t('back-to-tokens')} />

			<Box sx={{ mt: 3 }}>
				<CreateApiTokenBody />
			</Box>
		</Box>
	);
};

export default CreateApiToken;
