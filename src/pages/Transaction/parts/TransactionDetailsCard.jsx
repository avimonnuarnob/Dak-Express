/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	card: {},
	card__body: {
		display: 'grid',
		gridTemplateColumns: '1fr',

		border: '1px solid #E5EBF0',
		marginTop: '1.5rem',
		borderRadius: '0.5rem',
		overflow: 'scroll',

		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__body__item: {
		borderBottom: '1px solid #E5EBF0',

		'&:nth-last-child(-n+4)': {
			borderBottom: 0,
		},
	},
}));

const TransactionDetailsCard = ({ data }) => {
	const {t} = useTranslation();
	const classes = useStyles();

	return (
		<div className={classes.card__body}>
			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__body__item}
			>
				{t('transaction-amount')}
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__body__item}
				sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 } }}
			>
				{`BDT ${data.t_amount}`}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__body__item}
			>
				{t('transaction-id')}
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__body__item}
			>
				{data.t_id}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__body__item}
			>
				{t('date-and-time')}
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__body__item}
				sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 } }}
			>
				{data.t_date}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__body__item}
			>
				{t('payment-method')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__body__item}
			>
				{data.pay_method}
			</Typography>
		</div>
	);
};

TransactionDetailsCard.propTypes = {
	data: PropTypes.object.isRequired,
};

export default TransactionDetailsCard;
