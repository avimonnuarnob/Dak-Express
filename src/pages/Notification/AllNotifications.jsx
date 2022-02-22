import { Button, Grid, Paper } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import TabItemData from '../../components/modecules/TabItemData';
import TabItems from '../../components/modecules/TabItems';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import AllNotificationsBody from './parts/AllNotificationsBody';
// import ShipmentsTable from './parts/ShipmentsTable';

const AllNotifications = () => {
	const [tabItemValue, setTabItemValue] = useState('');
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('notifications'), link: 'notifications', current: true },
		],
		[t]
	);

	const tabsData = [
		{ id: 0, label: t('all'), value: '' },
		{ id: 1, label: t('unread'), value: 'unread' },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	const handleChangeTabItemValue = (value, newValue) => setTabItemValue(newValue);

	return (
		<Grid container px={3} py={2}>
			<Grid item xs={12}>
				<PageTitlebar title={t('all-notifications')} page={t('back-to-dashboard')} />
			</Grid>

			<Grid component={Paper} item xs={12} mt={2}>
				<TabItems items={tabsData} value={tabItemValue} onChange={handleChangeTabItemValue}>
					<Grid container>
						<Grid item md={12} py={1} m={1}>
							<Button color="secondary" variant="text">
								{t('mark-all-as-read')}
							</Button>
						</Grid>
					</Grid>
				</TabItems>
			</Grid>

			<Grid item xs={12}>
				<TabItemData value={tabItemValue} index={tabItemValue}>
					{/* <ShipmentsTable category={tabItemValue} /> */}
					<AllNotificationsBody status={tabItemValue} />
				</TabItemData>
			</Grid>
		</Grid>
	);
};

export default AllNotifications;
