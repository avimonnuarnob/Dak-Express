import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
	// eslint-disable-next-line prettier/prettier
	Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/modecules/Pagination';
import locationData from './locationData.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		paddingLeft: '2rem',
		paddingRight: '2rem',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		paddingLeft: '2rem',
		paddingRight: '2rem',
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

const ReceiverLocationTable = () => {
	const { t } = useTranslation();
	const [pageNumber, setPageNumber] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);

	const classes = useStyles();
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = pageNumber > 0 ? Math.max(0, (1 + pageNumber) * rowsPerPage - locationData.length) : 0;

	const handlePageChange = (event, newPage) => {
		// TODO:  Make API call while page changes
		setPageNumber(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPageNumber(0);
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
							? locationData.slice(pageNumber * rowsPerPage, pageNumber * rowsPerPage + rowsPerPage)
							: locationData
						).map((row, index) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell align="left">
									<Typography fontWeight={600}>{(index + 1)?.toString().padStart(2, '0')}</Typography>
								</StyledTableCell>
								<StyledTableCell align="left">{row.name}</StyledTableCell>
								<StyledTableCell align="left">{row.phone}</StyledTableCell>
								<StyledTableCell align="left">{row.business_name}</StyledTableCell>
								<StyledTableCell align="left">{row.address}</StyledTableCell>
								<StyledTableCell align="left">
									<Box className={classes.table__buttons}>
										<Link to={`/locations/receiver/${row?.id}`} style={{ textDecoration: 'none' }}>
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

										<Link
											to={`/locations/receiver/${row.id}/edit`}
											style={{ textDecoration: 'none', color: 'inherit' }}
										>
											<Button
												sx={{ width: '100%' }}
												size="small"
												variant="outlined"
												className={classes['table__buttons--edit']}
												startIcon={<EditOutlinedIcon />}
											>
												{t('edit')}
											</Button>
										</Link>
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
					data={locationData}
					page={pageNumber}
					rowsPerPage={rowsPerPage}
					handlePageChange={handlePageChange}
					handlePageRowsChange={handlePageRowsChange}
				/>
			</Box>
		</>
	);
};

export default ReceiverLocationTable;
