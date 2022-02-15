import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'Shipments', link: 'shipments', current: true },
];

const tabsData = [
	{ id: 0, label: 'All (8)', value: '' },
	{ id: 1, label: 'In Transit (5)', value: 'intransit' },
	{ id: 2, label: 'Delivered (7)', value: 'delivery' },
	{ id: 3, label: 'Failed (6)', value: 'failed' },
];

const AllShipments = () => {
	const [tabItemValue, setTabItemValue] = useState('');
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const handleChangeTabItemValue = (value, newValue) => setTabItemValue(newValue);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Grid container>
			<Grid item xs={12}>
				<PageTitlebar title="All Shipments" />
			</Grid>

			<Grid item xs={12} mx={2}>
				<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
					<DownloadButtonOptions label="Download" />

					<Link to="/new-shipment" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1, m: 1 }} startIcon={<AddOutlinedIcon />}>
							Add New Shipment
						</Button>
					</Link>
				</Box>
			</Grid>

			<Grid item xs={12} mt={2} mb={2}>
				<TabItems items={tabsData} value={tabItemValue} onChange={handleChangeTabItemValue}>
					<Grid container>
						<Grid item md={4} py={1} m={1}>
							<SearchBar />
						</Grid>

						<Grid item md={7} py={1} m={1}>
							<DateRangeInputField fullWidth startLabel="Start Date" endLabel="End Date" name="date" />
						</Grid>
					</Grid>
				</TabItems>
			</Grid>

			<Grid item xs={12}>
				<TabItemData value={tabItemValue} index={tabItemValue}>
					<ShipmentsTable category={tabItemValue} />
				</TabItemData>
			</Grid>
		</Grid>
	);
};

export default AllShipments;
