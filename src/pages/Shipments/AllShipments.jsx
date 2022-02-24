import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/atoms/SearchBar';
import DateRangeInputField from '../../components/modecules/DateRangeInputField';
import DownloadButtonOptions from '../../components/modecules/DownloadButton';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import TabItemData from '../../components/modecules/TabItemData';
import TabItems from '../../components/modecules/TabItems';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ShipmentsTable from './parts/ShipmentsTable';

const AllShipments = () => {
	const [tabItemValue, setTabItemValue] = useState('');
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('all-shipments'), link: 'shipments', current: true },
		],
		[t]
	);

	const tabsData = [
		{ id: 0, label: t('shipments-all'), value: '' },
		{ id: 1, label: t('shipments-intransit'), value: 'intransit' },
		{ id: 2, label: t('shipments-delivered'), value: 'delivery' },
		{ id: 3, label: t('shipments-failed'), value: 'failed' },
	];

	const handleChangeTabItemValue = (value, newValue) => setTabItemValue(newValue);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Grid container px={3} py={2}>
			<Grid item xs={12}>
				<PageTitlebar title={t('all-shipments')} page={t('back-to-dashboard')} />
			</Grid>

			<Grid item xs={12} mt={2}>
				<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
					<DownloadButtonOptions label={t('download')} />

					<Link to="/new-shipment" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1, my: 1 }} startIcon={<AddOutlinedIcon />}>
							{t('add-new-shipment')}
						</Button>
					</Link>
				</Box>
			</Grid>

			<Grid item xs={12} mt={2}>
				<TabItems items={tabsData} value={tabItemValue} onChange={handleChangeTabItemValue}>
					<Grid container spacing={2}>
						<Grid item md={4}>
							<SearchBar />
						</Grid>

						<Grid item md={8}>
							<DateRangeInputField fullWidth startLabel={t('start-date')} endLabel={t('end-date')} name="date" />
						</Grid>
					</Grid>
				</TabItems>
			</Grid>

			<Grid item xs={12} mt={2}>
				<TabItemData value={tabItemValue} index={tabItemValue}>
					<ShipmentsTable category={tabItemValue} />
				</TabItemData>
			</Grid>
		</Grid>
	);
};

export default AllShipments;
