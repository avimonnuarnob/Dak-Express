/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Chip, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
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
    "productTitle": "asxs",
    "unitType": "lb",
    "weight": "2",
    "quantity": "2",
    "height": "",
    "width": "",
    "length": ""
  }
]

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
	const {t} = useTranslation();
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
						{t('transaction-details')}
					</Typography>
					<Box sx={{ ml: 'auto' }}>
						<Chip
							label={t('success')}
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
						{t('product-details')}
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
