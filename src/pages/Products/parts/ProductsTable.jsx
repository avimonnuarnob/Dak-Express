import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/modecules/Pagination';
import products from './products.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
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

const ShipmentsTable = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const { t } = useTranslation();

	const classes = useStyles();

	const handlePageChange = (event, newPage) => {
		// TODO:  Make API call while page changes
		setPage(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const renderEmptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

	return (
		<>
			<TableContainer component={Paper}>
				<Table aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>SI</StyledTableCell>
							<StyledTableCell align="left">Product Title</StyledTableCell>
							<StyledTableCell align="left">Weight</StyledTableCell>
							<StyledTableCell align="left">Quantity</StyledTableCell>
							<StyledTableCell align="left">Length (CM)</StyledTableCell>
							<StyledTableCell align="left">Width (CM)</StyledTableCell>
							<StyledTableCell align="left">Height (CM)</StyledTableCell>
							<StyledTableCell align="center">Actions</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{(rowsPerPage > 0 ? products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : products)?.map(
							(product) => (
								<StyledTableRow key={product?.id}>
									<StyledTableCell>
										<Typography fontWeight={600}>{product?.id}</Typography>
									</StyledTableCell>

									<StyledTableCell>
										<Typography fontWeight={600} variant="body2" noWrap>
											{product?.title}
										</Typography>
									</StyledTableCell>

									<StyledTableCell>
										<Typography>{`${product?.weight} ${product?.unitType}`}</Typography>
									</StyledTableCell>

									<StyledTableCell>
										<Typography>{product?.quantity}</Typography>
									</StyledTableCell>

									<StyledTableCell>
										<Typography>{product?.length}</Typography>
									</StyledTableCell>

									<StyledTableCell>
										<Typography>{product?.width}</Typography>
									</StyledTableCell>

									<StyledTableCell>
										<Typography>{product?.height}</Typography>
									</StyledTableCell>

									<StyledTableCell align="left">
										<Box className={classes.table__buttons}>
											<Link to={`/products/edit/${product?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
							)
						)}

						{renderEmptyRows > 0 && (
							<TableRow style={{ height: 53 * renderEmptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
				</Table>

				{products?.length === 0 && (
					<Box>
						<Typography variant="body1" py={2} textAlign="center" color="GrayText">
							SORRY! There is no data to show
						</Typography>
					</Box>
				)}
			</TableContainer>

			<Box sx={{ py: '10px' }}>
				<Pagination
					data={products}
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
