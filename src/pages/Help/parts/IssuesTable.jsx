/* eslint-disable prettier/prettier */
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Pagination from '../../../components/modecules/Pagination';
import ShipmentStatus from '../../../components/modecules/ShipmentStatus';
import FAKE_DATA from './FAKE_ISSUESDATA.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
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

const IssuesTable = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);

	const classes = useStyles();

	const handlePageChange = (event, newPage) => {
		// TODO:  Make API call while page changes
		setPage(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const renderEmptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - FAKE_DATA.length) : 0;

	return (
		<>
			<TableContainer component={Paper}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>SL</StyledTableCell>
							<StyledTableCell align="left">Shipment ID</StyledTableCell>
							<StyledTableCell align="left">Issue ID</StyledTableCell>
							<StyledTableCell align="left">Date & Time</StyledTableCell>
							<StyledTableCell align="left">
								Issue Message & Attachment
							</StyledTableCell>
							<StyledTableCell align="left">Status</StyledTableCell>
							<StyledTableCell align="center">Action</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{(rowsPerPage > 0
							? FAKE_DATA?.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: FAKE_DATA
						)?.map((row, index) => (
							<StyledTableRow key={`Issue-${index + 1}`}>
								<StyledTableCell scope="row">
									<Typography fontWeight={600}>{index + 1}</Typography>
								</StyledTableCell>
								<StyledTableCell scope="row">
									<Typography fontWeight={600}>{row?.s_id}</Typography>
								</StyledTableCell>
								<StyledTableCell align="left">
									<Typography fontWeight={600}>{row?.i_id}</Typography>
								</StyledTableCell>
								<StyledTableCell align="left">{row?.date}</StyledTableCell>
								<StyledTableCell align="left">{row?.issue}</StyledTableCell>
								<StyledTableCell align="left">
									<ShipmentStatus label={row?.status} />
								</StyledTableCell>
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
									</Box>
								</StyledTableCell>
							</StyledTableRow>
						))}

						{renderEmptyRows > 0 && (
							<TableRow style={{ height: 53 * renderEmptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}

						{FAKE_DATA?.length === 0 && (
							<Box>
								<Typography
									variant="body1"
									sx={{ color: (theme) => theme.palette.status.failed }}
								>
									OOPS! There is no data
								</Typography>
							</Box>
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

export default IssuesTable;
