/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {
	Box,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TableActionButton from '../../../components/atoms/ActionButton';
import ShipmentStatus from '../../../components/modecules/ShipmentStatus';

const FAKE_DATA = [
	{
		s_id: 'KLM7642138',
		t_id: 'TXNdaE51468745',
		date: '12 Dec 2021 08:49PM',
		pay_method: 'Online Payment',
		status: 'Delivered',
		price: 70,
	},
	{
		s_id: 'KLM7642138',
		t_id: 'TXNdaE51468745',
		date: '12 Dec 2021 08:49PM',
		pay_method: 'Online Payment',
		status: 'Delivered',
		price: 70,
	},
	{
		s_id: 'KLM7642138',
		t_id: 'TXNdaE51468745',
		date: '12 Dec 2021 08:49PM',
		pay_method: 'Online Payment',
		status: 'Delivered',
		price: 70,
	},
	{
		s_id: 'KLM7642138',
		t_id: 'TXNdaE51468745',
		date: '12 Dec 2021 08:49PM',
		pay_method: 'Online Payment',
		status: 'Delivered',
		price: 70,
	},
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const TablePaginationActions = (props) => {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<Box sx={{ flexShrink: 0, ml: 2.5 }}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</Box>
	);
};

const TransactionHistoryTable = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - FAKE_DATA.length) : 0;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{
					minWidth: '1000px',
				}}
			>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="left">SL</StyledTableCell>
							<StyledTableCell align="left">Shipment ID</StyledTableCell>
							<StyledTableCell align="left">Transaction ID</StyledTableCell>
							<StyledTableCell align="left">Date & Time</StyledTableCell>
							<StyledTableCell align="left">Amount</StyledTableCell>
							<StyledTableCell align="left">Payment Method</StyledTableCell>
							<StyledTableCell align="left">Status</StyledTableCell>
							<StyledTableCell align="left">Action</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? FAKE_DATA.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: FAKE_DATA
						).map((row, index) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell align="left">
									<Typography fontWeight="500">
										{(index + 1).toString().padStart(2, '0')}
									</Typography>
								</StyledTableCell>

								<StyledTableCell align="left">
									<Typography fontWeight="700">{row.s_id}</Typography>
								</StyledTableCell>

								<StyledTableCell align="left">{row.t_id}</StyledTableCell>

								<StyledTableCell align="left">{row.date}</StyledTableCell>

								<StyledTableCell align="left">{`BDT ${row.price}`}</StyledTableCell>

								<StyledTableCell align="left">{row.pay_method}</StyledTableCell>

								<StyledTableCell align="left">
									<ShipmentStatus label="delivery" />
								</StyledTableCell>

								<StyledTableCell align="left">
									<TableActionButton
										Icon={RemoveRedEyeOutlinedIcon}
										color="typography.sec"
										label="View"
									/>
								</StyledTableCell>
							</StyledTableRow>
						))}

						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[1, 2, 5, { label: 'All', value: -1 }]}
				colSpan={3}
				count={FAKE_DATA.length}
				rowsPerPage={rowsPerPage}
				page={page}
				SelectProps={{
					inputProps: {
						'aria-label': 'rows per page',
					},
					native: true,
				}}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				ActionsComponent={TablePaginationActions}
				sx={{
					display: 'block',
					borderBottom: 0,
				}}
			/>
		</>
	);
};

export default TransactionHistoryTable;
