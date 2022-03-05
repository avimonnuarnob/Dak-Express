import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { issueUrls, methods } from '../../../apis/urls';
import useAxios from '../../../apis/useAxios';
import ErrorAlert from '../../../components/atoms/ErrorAlert';
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
	truncate: {
		width: '20ch',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
}));

const IssuesTable = () => {
	const { t } = useTranslation();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const [data, setData] = useState([]);

	const { loading, requestToServerWith } = useAxios();

	const classes = useStyles();

	useEffect(() => {
		requestToServerWith({ url: issueUrls.issues, method: methods.GET }).then((response) => setData(response.data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestToServerWith]);

	const handlePageChange = (event, newPage) => {
		// TODO:  Make API call while page changes
		setPage(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const renderEmptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - FAKE_DATA.length) : 0;

	return (
		<>
			<ErrorAlert />
			<TableContainer component={Paper}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>SL</StyledTableCell>
							<StyledTableCell align="left">Shipment ID</StyledTableCell>
							<StyledTableCell align="left">Issue ID</StyledTableCell>
							<StyledTableCell align="left">Date & Time</StyledTableCell>
							<StyledTableCell align="left">Issue Message & Attachment</StyledTableCell>
							<StyledTableCell align="left">Status</StyledTableCell>
							<StyledTableCell align="center">Action</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{!loading ? (
							<>
								{(rowsPerPage > 0 ? data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data)?.map(
									(row, index) => (
										<StyledTableRow key={`Issue-${index + 1}`}>
											<StyledTableCell scope="row">
												<Typography fontWeight={600}>{index + 1}</Typography>
											</StyledTableCell>
											<StyledTableCell scope="row">
												<Typography className={classes.truncate} fontWeight={600}>
													{row?.shipmentCode ?? 'N/A'}
												</Typography>{' '}
											</StyledTableCell>
											<StyledTableCell align="left">
												<Typography className={classes.truncate} fontWeight={600}>
													{row?.id ?? 'N/A'}
												</Typography>
											</StyledTableCell>
											<StyledTableCell align="left">{row?.date ?? 'N/A'}</StyledTableCell>
											<StyledTableCell align="left">
												<Typography className={classes.truncate} fontWeight={600}>
													{row?.message ?? 'N/A'}
												</Typography>
											</StyledTableCell>
											<StyledTableCell align="left">
												<ShipmentStatus label={row?.status} />
											</StyledTableCell>
											<StyledTableCell align="left">
												<Box className={classes.table__buttons}>
													<Link to={`/supports/${row?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
												</Box>
											</StyledTableCell>
										</StyledTableRow>
									)
								)}

								{renderEmptyRows > 0 && (
									<TableRow style={{ height: 53 * renderEmptyRows }}>
										<TableCell colSpan={6} />
									</TableRow>
								)}

								{FAKE_DATA?.length === 0 && (
									<Box>
										<Typography variant="body1" sx={{ color: (theme) => theme.palette.status.failed }}>
											OOPS! There is no data
										</Typography>
									</Box>
								)}
							</>
						) : (
							<TableRow>
								<TableCell colSpan={7} align="center">
									<Box>
										<CircularProgress color="success" />
									</Box>
								</TableCell>
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

export default IssuesTable;
