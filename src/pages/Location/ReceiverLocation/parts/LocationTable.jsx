import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// eslint-disable-next-line prettier/prettier
import { Box, Button, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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

const LocationTable = ({ locationData = [] }) => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="left">SL</StyledTableCell>
						<StyledTableCell align="left">First Name</StyledTableCell>
						<StyledTableCell align="left">Last Name</StyledTableCell>
						<StyledTableCell align="left">Mobile Number</StyledTableCell>
						<StyledTableCell align="left">Business Name</StyledTableCell>
						<StyledTableCell align="left">Address</StyledTableCell>
						<StyledTableCell align="left">Actions</StyledTableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{locationData?.map((location, index) => (
						<StyledTableRow key={location.id}>
							<StyledTableCell align="left">
								<Typography fontWeight={600}>{index + 1}</Typography>
							</StyledTableCell>
							<StyledTableCell align="left">{location.firstName}</StyledTableCell>
							<StyledTableCell align="left">{location.lastName}</StyledTableCell>
							<StyledTableCell align="left">{location.phone}</StyledTableCell>
							<StyledTableCell align="left">{location.businessName}</StyledTableCell>
							<StyledTableCell align="left">{location.address}</StyledTableCell>
							<StyledTableCell align="left">
								<Box className={classes.table__buttons}>
									<Link to={`/locations/receiver/${location?.id}`} style={{ textDecoration: 'none' }}>
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
										to={`/locations/receiver/${location.id}/edit`}
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
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default LocationTable;
