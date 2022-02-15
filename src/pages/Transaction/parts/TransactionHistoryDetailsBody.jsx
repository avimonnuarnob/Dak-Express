/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Chip, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TransactionDetailsCard from './TransactionDetailsCard';
import TransactionDetailsTable from './TransactionDetailsTable';

const FAKE_DATA = {
	t_amount: 70,
	t_id: 'TXNdaE51468745',
	t_date: '12 Dec 2021 (08:49 PM)',
	pay_method: 'Online Payment',
};

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
	card: {},
	card__header: {
		padding: theme.spacing(3, 0),
		display: 'flex',
		alignItems: 'center',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
	},
}));

const TransactionHistoryDetailsBody = () => {
	const classes = useStyles();
	return (
		<>
			<Paper sx={{ p: 2, mt: 3 }}>
				<Box className={classes.card__header}>
					<Typography
						fontSize="24px"
						fontWeight="bold"
						sx={{ color: 'status.pending' }}
					>
						Transaction Details
					</Typography>
					<Box sx={{ ml: 'auto' }}>
						<Chip
							label="SUCCESS"
							sx={{
								backgroundColor: 'status.success',
								color: (theme) => theme.palette.primary.white,
								px: { xs: 2, sm: 5 },
							}}
						/>
					</Box>
				</Box>
				<TransactionDetailsCard data={FAKE_DATA} />
			</Paper>

			<Paper sx={{ p: 2, mt: 3 }}>
				<Box className={classes.card__header}>
					<Typography
						fontSize="24px"
						fontWeight="bold"
						sx={{ color: 'status.pending' }}
					>
						Parcel Details
					</Typography>
				</Box>

				<Box sx={{ mt: 3 }}>
					<TransactionDetailsTable data={TABLE_FAKE_DATA} />
				</Box>
			</Paper>
		</>
	);
};

export default TransactionHistoryDetailsBody;
