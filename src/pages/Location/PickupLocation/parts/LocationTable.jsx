/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import EditIcon from '@mui/icons-material/Edit';
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
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Pagination from '../../../../components/modecules/Pagination';

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

const useStyles = makeStyles((theme) => ({
	table: {},
	table__buttons: {
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
		justifyContent: 'center',
	},
	'table__buttons--edit': {
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
}));

const LocationTable = () => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

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
								<StyledTableCell align="left">
									<Typography fontWeight={600}>{index + 1}</Typography>
								</StyledTableCell>
								<StyledTableCell align="left">{row.name}</StyledTableCell>
								<StyledTableCell align="left">{row.mobile_no}</StyledTableCell>
								<StyledTableCell align="left">
									{row.business_name}
								</StyledTableCell>
								<StyledTableCell align="left">{row.address}</StyledTableCell>
								<StyledTableCell align="left">
									<Box className={classes.table__buttons}>
										<Button
											size="small"
											variant="outlined"
											color="secondary"
											startIcon={<VisibilityOutlinedIcon />}
										>
											View
										</Button>

										<Button
											size="small"
											variant="outlined"
											color="secondary"
											className={classes['table__buttons--edit']}
											startIcon={<EditIcon />}
										>
											Edit
										</Button>
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

export default LocationTable;
