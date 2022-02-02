import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/atoms/SearchBar';
import DateInput from '../../components/modecules/DateInput';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import TabItemData from '../../components/modecules/TabItemData';
import TabItems from '../../components/modecules/TabItems';
import ShipmentsTable from './parts/ShipmentsTable';

const tabsData = [
	{ id: 0, label: 'All (8)', value: '' },
	{ id: 1, label: 'In Transit (5)', value: 'intransit' },
	{ id: 2, label: 'Delivered (7)', value: 'delivery' },
	{ id: 3, label: 'Failed (6)', value: 'failed' },
];

const AllShipments = () => {
	const [tabItemValue, setTabItemValue] = useState('');

	const handleChangeTabItemValue = (value, newValue) => setTabItemValue(newValue);

	return (
		<Grid container>
			<Grid item xs={12}>
				<PageTitlebar title="All Shipments" />
			</Grid>

			<Grid item xs={12}>
				<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
					<Button
						variant="contained"
						color="secondary"
						sx={{ px: 2, py: 1, m: 1 }}
						startIcon={<FileDownloadOutlinedIcon />}
					>
						Download
					</Button>

					<Link to="/create-new-shipment" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1, m: 1 }} startIcon={<AddOutlinedIcon />}>
							Add New Shipment
						</Button>
					</Link>
				</Box>
			</Grid>

			<Grid item xs={12}>
				<TabItems items={tabsData} value={tabItemValue} onChange={handleChangeTabItemValue}>
					<Grid container>
						<Grid item md={4} py={1} m={1}>
							<SearchBar />
						</Grid>

						<Grid item md={7} py={1} m={1}>
							<DateInput fullWidth label="Date" name="date" />
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
