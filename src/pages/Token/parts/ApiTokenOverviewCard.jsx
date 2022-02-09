/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'grid',
		gridTemplateColumns: '1fr',

		border: '1px solid #E5EBF0',
		marginTop: '1.5rem',
		borderRadius: '0.5rem',
		overflow: 'scroll',

		[theme.breakpoints.up('md')]: {
			// gridTemplateColumns: '1fr',
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__item: {
		borderBottom: '1px solid #E5EBF0',
	},
}));

const ApiTokenOverviewCard = () => {
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
				Name
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
				Android Key
			</Typography>
			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Type
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Standard
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Access Key
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					gridColumn: '2 / -1',
				}}
			>
				KGHD14587857FHdsfdhsfjdsKGHD14587857FHdsfdhsfjdsKGHD14587857FHdsfdhsfjds
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Secret Key
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{
					gridColumn: '2 / -1',
				}}
			>
				KGHD14587857FHdsfdhsfjdsKGHD14587857FHdsfdhsfjdsKGHD14587857FHdsfdhsfjds{' '}
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Create Date
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
				12 Dec 2021
			</Typography>
			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Expiry Date
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				12 Dec 2021
			</Typography>
		</div>
	);
};

export default ApiTokenOverviewCard;
