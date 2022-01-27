/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import AppTable from '../../../components/modecules/AppTable';
import SearchBar from '../../../components/atoms/SearchBar';
import TableActionButton from '../../../components/atoms/TableActionButton';
import TableChip from '../../../components/atoms/TableChip';

function createData(sl, s_id, location, courier, delivery, cost, status, actions) {
	return { sl, s_id, location, courier, delivery, cost, status, actions };
}

const FAKE_ROWS = [
	createData(
		<Typography fontWeight="700">01</Typography>,
		<Typography fontWeight="700">KLM7642138</Typography>,
		<>
			<Typography
				fontWeight="700"
				fontSize="16px"
				sx={{
					mb: 1,
				}}
			>
				Shamir Hossain Sorkar
			</Typography>
			<Typography fontSize="14px">H#96/A, R#13, B#D, Banani 1212</Typography>
		</>,
		<img
			src="https://picsum.photos/40/20
		"
			alt="hello"
		/>,
		'26-30 Dec 2021',
		'BDT 70',

		<TableChip label="Success" color="status.success" />,
		<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
	),

	createData(
		<Typography fontWeight="700">02</Typography>,
		<Typography fontWeight="700">KLM7642138</Typography>,
		<>
			<Typography
				fontWeight="700"
				fontSize="16px"
				sx={{
					mb: 1,
				}}
			>
				Shamir Hossain Sorkar
			</Typography>
			<Typography fontSize="14px">H#96/A, R#13, B#D, Banani 1212</Typography>
		</>,
		<img
			src="https://picsum.photos/40/20
		"
			alt="hello"
		/>,
		'26-30 Dec 2021',
		'BDT 70',
		<TableChip label="Failed" color="status.failed" />,
		<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
	),
];

const ShipmentTable = () => {
	return (
		<Box
			sx={{
				mt: 3,
				color: (theme) => theme.palette.typography.main,
			}}
		>
			<Box
				sx={{
					display: {
						xs: 'block',
						sm: 'flex',
					},
					alignItems: 'center',
				}}
			>
				<Typography sx={{ typography: { sm: 'h5', xs: 'h6' }, fontWeight: '600 !important' }}>
					Recent Shipment
				</Typography>
				<Box
					sx={{
						ml: 'auto',
						marginTop: {
							xs: 2,
							sm: 0,
						},
					}}
				>
					<SearchBar />
				</Box>
			</Box>
			<Box
				sx={{
					mt: 3,
					borderRadius: 3,
				}}
			>
				<AppTable
					rows={FAKE_ROWS}
					columns={[
						'SL',
						'Shipment ID',
						'Location Details',
						'Courier',
						'Estimated Delivery',
						'Cost',
						'Status',
						'Actions',
					]}
				/>
			</Box>
		</Box>
	);
};

export default ShipmentTable;
