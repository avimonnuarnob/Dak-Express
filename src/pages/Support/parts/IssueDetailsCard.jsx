import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { format } from 'date-fns';
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

const IssueDetailsCard = ({ issueData }) => {
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
				{issueData?.shipmentCode ?? 'N/A'}
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
				{`${issueData?.firstName} ${issueData?.lastName}` ?? 'N/A'}
			</Typography>
			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('mobile-number')}
			</Typography>
			<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
				{issueData?.phone ?? 'N/A'}
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
				{issueData?.email ?? 'N/A'}
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
				{issueData?.subject}
			</Typography>
			<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
				{t('date')}
			</Typography>
			<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
				{format(new Date(issueData?.createdAt ?? null), 'dd/MM/yyyy hh:mm aa')}
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
				{issueData?.attachment}
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
				{issueData?.message ?? 'N/A'}
			</Typography>
		</div>
	);
};

export default IssueDetailsCard;
