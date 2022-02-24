import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ApiTokenOverViewBody from './parts/ApiTokenOverViewBody';

const ApiTokenView = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { t } = useTranslation();
	const { id } = useParams();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('api-tokens-header'), link: 'tokens' },
			{ title: id, link: `tokens/${id}`, current: true },
		],
		[t, id]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [dispatch, breadcrumbs]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<HeaderTitle label={t('api-token-header')} />
				<BackButton redirectTo="/tokens" label={t('back-to-tokens')} />
			</Box>

			<Box sx={{ mt: 3 }}>
				<ApiTokenOverViewBody />
			</Box>
		</Box>
	);
};

export default ApiTokenView;
