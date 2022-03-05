import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	card: {
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
	card__item: {
		borderBottom: '1px solid #E5EBF0',
	},
}));

const IssueDetailsCard = ({ data }) => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('issue-shipment-id')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '2 / -1' }}
			>
				{data?.S_id ?? 'N/A'}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '1' }}
			>
				{t('full-name')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					borderRight: { md: '1px solid #E5EBF0', sm: 0 },
				}}
			>
				{`${data?.firstName} ${data?.lastName}` ?? 'N/A'}
			</Typography>
			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('mobile-number')}
			</Typography>
			<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
				{data?.phone ?? 'N/A'}
			</Typography>

			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('email')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '2 / -1' }}
			>
				{data?.email ?? 'N/A'}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '1' }}
			>
				{t('subject')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					borderRight: { md: '1px solid #E5EBF0', sm: 0 },
				}}
			>
				{data?.subject ?? 'N/A'}
			</Typography>
			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('date')}
			</Typography>
			<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
				{data?.date ?? 'N/A'}
			</Typography>

			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('attachment')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '2 / -1' }}
			>
				{data?.attachment ?? 'N/A'}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ borderBottom: 0 }}
			>
				{t('message')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '2 / -1', borderBottom: 0 }}
			>
				{data?.message ?? 'N/A'}
			</Typography>
		</div>
	);
};

export default IssueDetailsCard;
