/* eslint-disable prettier/prettier */
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

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

const TransactionDetailsTable = ({ data }) => (
	<TableContainer component={Paper}>
		<Table aria-label="customized table">
			<TableHead>
				<TableRow>
					<StyledTableCell align="left">Product Name</StyledTableCell>
					<StyledTableCell align="left">Unit Type</StyledTableCell>
					<StyledTableCell align="left">QTY</StyledTableCell>
					<StyledTableCell align="left">Weight</StyledTableCell>
					<StyledTableCell align="left">Length</StyledTableCell>
					<StyledTableCell align="left">Width</StyledTableCell>
					<StyledTableCell align="left">Height</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((row) => (
					<StyledTableRow key={row.p_name}>
						<StyledTableCell align="left">{row.p_name}</StyledTableCell>
						<StyledTableCell align="left">{row.unit}</StyledTableCell>
						<StyledTableCell align="left">{row.qty}</StyledTableCell>
						<StyledTableCell align="left">{row.weight}</StyledTableCell>
						<StyledTableCell align="left">{row.length}</StyledTableCell>
						<StyledTableCell align="left">{row.width}</StyledTableCell>
						<StyledTableCell align="left">{row.height}</StyledTableCell>
					</StyledTableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

export default TransactionDetailsTable;
