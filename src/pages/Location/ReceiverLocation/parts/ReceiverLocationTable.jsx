/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import EditIcon from '@mui/icons-material/Edit';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TableActionButton from '../../../../components/atoms/ActionButton';

const FAKE_DATA = [
	{
		name: 'Shamir Hossain Sorkar',
		mobile_no: '+880 1324 249011',
		business_name: 'Cityscape Global Ltd',
		address: 'H#96/A, R#13, B#D, Banani 1212',
	},
	{
		name: 'Shamir Hossain Sorkar',
		mobile_no: '+880 1324 249011',
		business_name: 'Cityscape Global Ltd',
		address: 'H#96/A, R#13, B#D, Banani 1212',
	},
	{
		name: 'Shamir Hossain Sorkar',
		mobile_no: '+880 1324 249011',
		business_name: 'Cityscape Global Ltd',
		address: 'H#96/A, R#13, B#D, Banani 1212',
	},
	{
		name: 'Shamir Hossain Sorkar',
		mobile_no: '+880 1324 249011',
		business_name: 'Cityscape Global Ltd',
		address: 'H#96/A, R#13, B#D, Banani 1212',
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

const ReceiverLocationTable = () => {
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
					borderRadius: 3,
					// border: (theme) => `1px solid ${theme.palette.primary.sec}`,
					minWidth: '1000px',
				}}
				// elevation={3}
			>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="left">SL</StyledTableCell>
							<StyledTableCell align="left">Name</StyledTableCell>
							<StyledTableCell align="left">Mobile Number</StyledTableCell>
							<StyledTableCell align="left">Business Name</StyledTableCell>
							<StyledTableCell align="left">Address</StyledTableCell>
							<StyledTableCell align="left">Actions</StyledTableCell>
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
								<StyledTableCell align="left">{index + 1}</StyledTableCell>
								<StyledTableCell align="left">{row.name}</StyledTableCell>
								<StyledTableCell align="left">{row.mobile_no}</StyledTableCell>
								<StyledTableCell align="left">
									{row.business_name}
								</StyledTableCell>
								<StyledTableCell align="left">{row.address}</StyledTableCell>
								<StyledTableCell align="left">
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											gap: 0.5,
										}}
									>
										<TableActionButton
											Icon={VisibilityIcon}
											color="typography.sec"
											label="View"
										/>
										<TableActionButton
											Icon={EditIcon}
											color="status.pending"
											label="Edit"
										/>
									</Box>
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

export default ReceiverLocationTable;
