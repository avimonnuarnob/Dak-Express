/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box, Paper, TablePagination } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useState } from 'react';

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
			<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
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

const AppTable = ({ rows, columns }) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
					overflowX: 'scroll',
				}}
			>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							{columns.map((column, i) => (
								<StyledTableCell align="left" key={`column-${i.toString()}`}>
									{column}
								</StyledTableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {rows.map((row) => (
								<StyledTableRow key={row.name}>
									<StyledTableCell component="th" scope="row">
										{row.name}
									</StyledTableCell>
									<StyledTableCell align="right">{row.calories}</StyledTableCell>
									<StyledTableCell align="right">{row.fat}</StyledTableCell>
									<StyledTableCell align="right">{row.carbs}</StyledTableCell>
									<StyledTableCell align="right">{row.protein}</StyledTableCell>
								</StyledTableRow>
							))} */}

						{(rowsPerPage > 0
							? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: rows
						).map((row) => (
							<StyledTableRow key={row.name}>
								{/* <StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.calories}</StyledTableCell>
								<StyledTableCell align="right">{row.fat}</StyledTableCell>
								<StyledTableCell align="right">{row.carbs}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell> */}
								{Object.keys(row).map((key) => (
									<StyledTableCell align="left" key={key}>
										{row[key]}
									</StyledTableCell>
								))}
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
				count={rows.length}
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

export default AppTable;

AppTable.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
	columns: PropTypes.arrayOf(PropTypes.any).isRequired,
};
