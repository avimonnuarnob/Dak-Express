/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TransactionDetailsTable from '../../Transaction/parts/TransactionDetailsTable';

const TABLE_FAKE_DATA = [
	{
		p_name: 'Backpack LEATHER MARK Rexine School Bag',
		unit: 'Kg',
		qty: '01',
		weight: '10 Kg',
		length: '10 CM',
		width: '10 CM',
		height: '10 CM',
	},
	{
		p_name: 'Backpack LEATHER MARK Rexine School Bag',
		unit: 'Kg',
		qty: '01',
		weight: '10 Kg',
		length: '10 CM',
		width: '10 CM',
		height: '10 CM',
	},
];

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(4, 4),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.sec}`,
		margin: theme.spacing(0, 0, 3, 0),
		padding: theme.spacing(0, 0, 3, 0),
		alignItems: 'center',
		justifyContent: 'space-between',

		'& h5': {
			color: theme.palette.status.pending,
		},
	},
	button: {},
	button__edit: {
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
}));

const ParcelDetails = ({ edit }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.box}>
			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					Receiver Details
				</Typography>
				{edit && (
					<Button
						size="small"
						variant="outlined"
						className={classes.button__edit}
						startIcon={<EditOutlinedIcon />}
					>
						Edit
					</Button>
				)}
			</Box>

			<Box
				sx={{
					border: '1px solid #E5EBF0',
					mt: 3,
					borderRadius: 2,
					overflow: 'scroll',
				}}
			>
				<TransactionDetailsTable data={TABLE_FAKE_DATA} />
			</Box>
		</Paper>
	);
};

export default ParcelDetails;
