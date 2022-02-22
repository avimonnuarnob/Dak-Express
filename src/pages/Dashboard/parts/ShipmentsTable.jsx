/* eslint-disable prettier/prettier */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
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
import Pagination from '../../../components/modecules/Pagination';
import ShipmentStatus from '../../../components/modecules/ShipmentStatus';
import shipments from './shipmentsData.json';

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

const ShipmentsTable = ({ category = '' }) => {
	const {t} = useTranslation();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const [shipmentsData, setShipmentsData] = useState([]);

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
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - shipments.length) : 0;

	useEffect(() => {
		setShipmentsData(() =>
			shipments?.filter((shipment) =>
				category ? shipment?.status === category : shipment
			)
		);

		if (shipmentsData?.length) {
			setPage(0);
			setShipmentsData(() =>
				shipments?.filter((shipment) =>
					category ? shipment?.status === category : shipment
				)
			);
		}

		return () => setShipmentsData([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	return (
		<>
			<Paper sx={{ overflowX: 'auto' }}>
				<TableContainer>
					<Table aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>SI</StyledTableCell>
								<StyledTableCell align="left">Shipment ID</StyledTableCell>
								<StyledTableCell align="left">Location Details</StyledTableCell>
								<StyledTableCell align="left">Courier</StyledTableCell>
								<StyledTableCell align="left">
									Estimated Delivery
								</StyledTableCell>
								<StyledTableCell align="left">Cost</StyledTableCell>
								<StyledTableCell align="left">Status</StyledTableCell>
								<StyledTableCell align="center">Actions</StyledTableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{(rowsPerPage > 0
								? shipmentsData?.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage
								  )
								: shipmentsData
							)?.map((shipment) => (
								<StyledTableRow key={shipment?.id}>
									<StyledTableCell scope="row">
										<Typography fontWeight={600}>
											{shipment?.id?.toString().padStart(2, '0')}
										</Typography>
									</StyledTableCell>
									<StyledTableCell scope="row">
										<Typography fontWeight={600}>
											{shipment?.shipmentId}
										</Typography>
									</StyledTableCell>
									<StyledTableCell align="left">
										<Box>
											<Typography variant="body1">{shipment?.name}</Typography>
											<Typography variant="body2" noWrap>
												{shipment?.address}
											</Typography>
										</Box>
									</StyledTableCell>
									<StyledTableCell align="left">
										<img
											src="https://picsum.photos/id/237/200/100"
											alt="Courier Service"
											width={60}
											style={{ border: '1px solid gray' }}
										/>
									</StyledTableCell>
									<StyledTableCell align="left">
										{shipment?.deliveryDate}
									</StyledTableCell>
									<StyledTableCell align="left">
										{shipment?.cost}
									</StyledTableCell>
									<StyledTableCell align="left">
										<ShipmentStatus label={shipment?.status} />
									</StyledTableCell>
									<StyledTableCell align="left">
										<Box className={classes.table__buttons}>
											<Link
												to={`/shipments/${shipment?.id}`}
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

											<Link
												to="/new-shipment"
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

							{shipmentsData?.length === 0 && (
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
			</Paper>
			<Box sx={{ py: '10px' }}>
				<Pagination
					data={shipmentsData}
					page={page}
					rowsPerPage={rowsPerPage}
					handlePageChange={handlePageChange}
					handlePageRowsChange={handlePageRowsChange}
				/>
			</Box>
		</>
	);
};

export default ShipmentsTable;
