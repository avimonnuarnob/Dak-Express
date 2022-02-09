/* eslint-disable prettier/prettier */
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
const UserCompanyInfo = () => {
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
				Business
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
				Cityscape Global Ltd
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Website or Fb Url
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
				https://cityscapeglobal.net/
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				Trade License
			</Typography>

			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
			>
				daraz_trade_license.JPEG
			</Typography>

			<Typography
				variant="body2"
				fontWeight="bold"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ borderBottom: 0 }}
			>
				Address
			</Typography>
			<Typography
				variant="body2"
				display="inline"
				padding={2}
				className={classes.card__item}
				sx={{ gridColumn: '2 / -1', borderBottom: 0 }}
			>
				Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212,
				Bangladesh.
			</Typography>
		</div>
	);
};

export default UserCompanyInfo;
