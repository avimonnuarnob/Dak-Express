/* eslint-disable no-unused-vars */
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
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ShipmentStatus from '../../../components/modecules/ShipmentStatus';

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

const IssuesTable = ({ issuesData, page, rowsPerPage }) => {
	const { t } = useTranslation();

	const classes = useStyles();

	const renderEmptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - issuesData.length) : 0;

	return (
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
					{issuesData?.map((issue, index) => (
						<StyledTableRow key={`Issue-${index + 1}`}>
							<StyledTableCell scope="row">
								<Typography fontWeight={600}>{index + 1}</Typography>
							</StyledTableCell>
							<StyledTableCell scope="row">
								<Typography className={classes.truncate} fontWeight={600}>
									{issue?.shipmentCode}
								</Typography>{' '}
							</StyledTableCell>
							<StyledTableCell align="left">
								<Typography className={classes.truncate} fontWeight={600}>
									{issue?.id}
								</Typography>
							</StyledTableCell>
							<StyledTableCell align="left">
								{format(new Date(issue?.createdAt ?? null), 'dd/MM/yyyy hh:mm aa')}
							</StyledTableCell>
							<StyledTableCell align="left">
								<Typography className={classes.truncate} fontWeight={600}>
									{issue?.message}
								</Typography>
							</StyledTableCell>
							<StyledTableCell align="left">
								<ShipmentStatus label={issue?.status?.toLowerCase()} />
							</StyledTableCell>
							<StyledTableCell align="left">
								<Box className={classes.table__buttons}>
									<Link to={`/supports/${issue?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
					))}

					{renderEmptyRows > 0 && (
						<TableRow style={{ height: 53 * renderEmptyRows }}>
							<TableCell colSpan={7} />
						</TableRow>
					)}

					{issuesData?.length === 0 && (
						<TableRow style={{ height: 53 * renderEmptyRows }}>
							<TableCell align="center" colSpan={7}>
								OOPS! There is no data
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default IssuesTable;
