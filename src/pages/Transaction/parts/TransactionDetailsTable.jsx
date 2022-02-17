/* eslint-disable prettier/prettier */
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow
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
				{data?.map((row, index) => (
					<StyledTableRow key={`${row.productTitle}-${(index+1).toString()}`}>
						<StyledTableCell align="left">{row?.productTitle || "N/A"}</StyledTableCell>
						<StyledTableCell align="left">{row?.unitType || "N/A"}</StyledTableCell>
						<StyledTableCell align="left">{row?.quantity || "N/A"}</StyledTableCell>
						<StyledTableCell align="left">{row?.weight || "N/A"}</StyledTableCell>
						<StyledTableCell align="left">{row?.length || "N/A"}</StyledTableCell>
						<StyledTableCell align="left">{row?.width || "N/A"}</StyledTableCell>
						<StyledTableCell align="left">{row?.height || "N/A"}</StyledTableCell>
					</StyledTableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

export default TransactionDetailsTable;
