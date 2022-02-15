import { Button, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import TabItemData from '../../components/modecules/TabItemData';
import TabItems from '../../components/modecules/TabItems';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import AllNotificationsBody from './parts/AllNotificationsBody';
// import ShipmentsTable from './parts/ShipmentsTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Notifications', link: 'notifications', current: true },
];

const tabsData = [
	{ id: 0, label: 'All', value: '' },
	{ id: 1, label: 'Unread', value: 'unread' },
];

const AllNotifications = () => {
	const [tabItemValue, setTabItemValue] = useState('');
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChangeTabItemValue = (value, newValue) => setTabItemValue(newValue);

	return (
		<Grid container px={3} py={2}>
			<Grid item xs={12}>
				<PageTitlebar title="All Notification" />
			</Grid>

			<Grid component={Paper} item xs={12} mt={2}>
				<TabItems items={tabsData} value={tabItemValue} onChange={handleChangeTabItemValue}>
					<Grid container>
						<Grid item md={12} py={1} m={1}>
							<Button color="secondary" variant="text">
								Mark all as read
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
