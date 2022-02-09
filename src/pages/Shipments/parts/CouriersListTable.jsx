import { Box, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import couriers from './couriers.json';

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
	'&:hover': {
		backgroundColor: theme.palette.primary.bluish,
		cursor: 'pointer',
	},
}));

// eslint-disable-next-line no-unused-vars
const CouriersListTable = ({ setFieldValue = null, values = {}, ...props }) => {
	const [selectCourier, setSelectCourier] = useState({});

	const handleSelectCourier = (courier) => () => {
		setSelectCourier(courier);
		setFieldValue('courier', courier);
	};

	return (
		<Paper sx={{ p: 4, m: 2 }} elevation={3}>
			<FormHeaderTitle formTitle="Career List & Price">
				<Box pb={1}>
					<Typography>Choose your desired Career & Price</Typography>
				</Box>
			</FormHeaderTitle>

			<TableContainer component={Paper}>
				<RadioGroup name="courier" value={selectCourier}>
					<Table aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell align="center" />
								<StyledTableCell align="center">Courier</StyledTableCell>
								<StyledTableCell align="center">Estimated Delivery</StyledTableCell>
								<StyledTableCell align="center">Cost</StyledTableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{couriers?.map((courier) => (
								<StyledTableRow key={courier?.id} onClick={handleSelectCourier(courier)}>
									<StyledTableCell align="center">
										<FormControlLabel value={courier} control={<Radio color="secondary" />} label="" />
									</StyledTableCell>
									<StyledTableCell align="center">
										<img src={courier?.courierImage} alt="Courier Service" width={60} />
									</StyledTableCell>
									<StyledTableCell align="center">{courier?.deliveryDate}</StyledTableCell>
									<StyledTableCell align="center">BDT {courier?.cost}.00</StyledTableCell>
								</StyledTableRow>
							))}

							{couriers?.length === 0 && (
								<Box>
									<Typography variant="body1" sx={{ color: (theme) => theme.palette.status.failed }}>
										OOPS! There is no data
									</Typography>
								</Box>
							)}
						</TableBody>
					</Table>
				</RadioGroup>
			</TableContainer>
		</Paper>
	);
};

export default CouriersListTable;
