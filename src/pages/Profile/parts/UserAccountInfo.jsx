/* eslint-disable prettier/prettier */
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',

		border: '1px solid #E5EBF0',
		margin: theme.spacing(3, 0, 0, 0),
		borderRadius: theme.spacing(1),
		overflow: 'scroll',
		color: theme.palette.typography.main,

		[theme.breakpoints.up('md')]: {
			// gridTemplateColumns: '1fr',
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__item: {
		borderBottom: '1px solid #E5EBF0',
	},
}));
const UserAccountInfo = () => {
	const { t } = useTranslation();
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
				{t('mobile-number')}
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
				+880 1324 249011
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				{t('email')}
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				rafez.hossain@cityscapeglobal.net
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ borderBottom: 0 }}
			>
				{t('role')}
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					borderRight: { md: '1px solid #E5EBF0', sm: 0 },
					borderBottom: 0,
				}}
			>
				Admin
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ borderBottom: 0 }}
			>
				{t('NID')}
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ borderBottom: 0 }}
			>
				660262414
			</Typography>
		</div>
	);
};

export default UserAccountInfo;
