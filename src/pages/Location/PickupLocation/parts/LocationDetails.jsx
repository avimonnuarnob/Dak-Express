/* eslint-disable arrow-body-style */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	button: {},
	button__edit: {
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},

	card: {},
	card__header: {
		padding: theme.spacing(3, 0),
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
	},
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
		'&:nth-last-child(-n+2)': {
			borderBottom: 0,
		},
	},
}));

const LocationDetails = () => {
	const classes = useStyles();
	return (
		<Paper sx={{ p: 2, mt: 3 }}>
			<Box className={classes.card__header}>
				<Typography fontSize="24px" fontWeight="bold" sx={{ color: 'status.pending' }}>
					Pickup Details
				</Typography>
				<Box sx={{ ml: 'auto' }}>
					<Link to="/locations/pickup/new" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button
							sx={{ width: '100%' }}
							size="small"
							variant="outlined"
							className={classes.button__edit}
							startIcon={<EditOutlinedIcon />}
						>
							Edit
						</Button>
					</Link>
				</Box>
			</Box>

			<div className={classes.card__body}>
				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__body__item}>
					Full Name
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__body__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					Md Rafez Hossain
				</Typography>

				<Typography
					variant="body2"
					fontWeight="bold"
					display="inline"
					padding={2}
					className={classes.card__body__item}
					sx={{ gridColumn: '1' }}
				>
					Business Name
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__body__item}
					sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 } }}
				>
					Cityscape Global Ltd
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__body__item}>
					Mobile Number
				</Typography>

				<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
					+880 1324 249011
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__body__item}>
					Address
				</Typography>
				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__body__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh.
				</Typography>
			</div>
		</Paper>
	);
};

export default LocationDetails;
