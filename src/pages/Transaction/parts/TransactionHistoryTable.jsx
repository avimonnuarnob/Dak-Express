/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/modecules/Pagination';
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

const StyledTableRow = styled(TableRow)(() => ({
	'&:nth-of-type(even)': {
		backgroundColor: '#f5f5f5',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const TransactionHistoryTable = () => {
	const {t} = useTranslation();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - FAKE_DATA.length) : 0;

	const handlePageChange = (event, newPage) => {
		// TODO:  Make API call while page changes
		setPage(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<TableContainer component={Paper}>
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
									<Link
										to={`/transactions/${row?.t_id}`}
										style={{ textDecoration: 'none' }}
									>
										<Button
											sx={{ width: '100%' }}
											size="small"
											variant="outlined"
											color="secondary"
											startIcon={<VisibilityOutlinedIcon />}
										>
											{t('view')}
										</Button>
									</Link>
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

			<Box sx={{ py: '10px' }}>
				<Pagination
					data={FAKE_DATA}
					page={page}
					rowsPerPage={rowsPerPage}
					handlePageChange={handlePageChange}
					handlePageRowsChange={handlePageRowsChange}
				/>
			</Box>
		</>
	);
};

export default TransactionHistoryTable;
