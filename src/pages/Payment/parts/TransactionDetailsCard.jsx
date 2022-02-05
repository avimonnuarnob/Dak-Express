/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',

		[theme.breakpoints.up('md')]: {
			// gridTemplateColumns: '1fr',
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__item: {
		borderBottom: '1px solid #E5EBF0',

		'&:nth-last-child(-n+4)': {
			borderBottom: 0,
		},
	},
}));

const TransactionDetailsCard = ({ data }) => {
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Transaction Amount
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					borderRight: {
						md: '1px solid #E5EBF0',
						sm: 0,
					},
				}}
			>
				{`BDT ${data.t_amount}`}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Transaction ID
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				{data.t_id}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Date & Time
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					borderRight: {
						md: '1px solid #E5EBF0',
						sm: 0,
					},
				}}
			>
				{data.t_date}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Payment Method
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
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