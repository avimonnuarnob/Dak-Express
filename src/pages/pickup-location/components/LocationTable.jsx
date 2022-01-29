/* eslint-disable arrow-body-style */
import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

import TableActionButton from '../../../components/atoms/TableActionButton';
import TableChip from '../../../components/atoms/TableChip';
import AppTable from '../../../components/modecules/AppTable';

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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<TableActionButton Icon={VisibilityIcon} color="typography.sec" label="View" />
			<TableActionButton Icon={EditIcon} color="status.pending" label="Edit" />
		</Box>
	),
];

const LocationTable = () => {
	return (
		<Box
			sx={{
				mt: 5,
				borderRadius: 3,
				overflow: 'scroll',
			}}
			elevation={3}
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
	);
};

export default LocationTable;
