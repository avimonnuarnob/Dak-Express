/* eslint-disable prettier/prettier */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/modecules/Pagination';
import ShipmentStatus from '../../../components/modecules/ShipmentStatus';
import apiTokens from './apiTokens.json';

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
	truncate: {
		width: '16ch',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
}));

const AllApiToknesTable = () => {
	const {t} = useTranslation();
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
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - apiTokens.length) : 0;

	return (
		<>
			<TableContainer component={Paper}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>SL</StyledTableCell>
							<StyledTableCell align="left">Name</StyledTableCell>
							<StyledTableCell align="left">Access Key</StyledTableCell>
							<StyledTableCell align="left">Type</StyledTableCell>
							<StyledTableCell align="left">Created Date</StyledTableCell>
							<StyledTableCell align="left">Expiry Date</StyledTableCell>
							<StyledTableCell align="left">Status</StyledTableCell>
							<StyledTableCell align="center">Actions</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{(rowsPerPage > 0
							? apiTokens?.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
							  )
							: apiTokens
						)?.map((token, index) => (
							<StyledTableRow key={token?.access_key}>
								<StyledTableCell scope="row">
									<Typography fontWeight={600}>{index + 1}</Typography>
								</StyledTableCell>
								<StyledTableCell scope="row">
									<Typography fontWeight={600}>{token?.name}</Typography>
								</StyledTableCell>
								<StyledTableCell scope="row">
									<Typography fontWeight={600} className={classes.truncate}>
										{token?.access_key}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="left">{token?.type}</StyledTableCell>
								<StyledTableCell align="left">
									{token?.create_date}
								</StyledTableCell>
								<StyledTableCell align="left">
									{token?.expiry_date}
								</StyledTableCell>
								<StyledTableCell align="left">
									<ShipmentStatus label={token?.status} />
								</StyledTableCell>
								<StyledTableCell align="left">
									<Box className={classes.table__buttons}>
										<Link
											to={`/tokens/${index + 1}`}
											style={{ textDecoration: 'none', color: 'inherit' }}
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

										<Link
											to="/tokens/new"
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

						{renderEmptyRows > 0 && (
							<TableRow style={{ height: 53 * renderEmptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}

						{apiTokens?.length === 0 && (
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
					data={apiTokens}
					page={page}
					rowsPerPage={rowsPerPage}
					handlePageChange={handlePageChange}
					handlePageRowsChange={handlePageRowsChange}
				/>
			</Box>
		</>
	);
};

export default AllApiToknesTable;
