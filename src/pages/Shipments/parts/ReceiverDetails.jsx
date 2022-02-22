/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(4, 4),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.sec}`,
		margin: theme.spacing(0, 0, 3, 0),
		padding: theme.spacing(0, 0, 3, 0),
		alignItems: 'center',
		justifyContent: 'space-between',

		'& h5': {
			color: theme.palette.status.pending,
		},
	},
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
		'&:nth-last-child(-n+2)': {
			borderBottom: 0,
		},
	},
	button: {},
	button__edit: {
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
}));

const ReceiverDetails = ({ edit, receiver, setPreviewData }) => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Paper className={classes.box}>
			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					{t('receiver-details')}
				</Typography>
				{edit && (
					<Button
						size="small"
						variant="outlined"
						className={classes.button__edit}
						startIcon={<EditOutlinedIcon />}
						onClick={() => setPreviewData(false)}
					>
						{t('edit')}
					</Button>
				)}
			</Box>

			<div className={classes.card}>
				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					{t('full-name')}
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					{receiver?.firstName || ' '} {receiver?.lastName || ' '}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					{t('business-name')}
				</Typography>

				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ borderRight: { md: '1px solid #E5EBF0', sm: 0 } }}
				>
					{receiver?.businessName || 'N/A'}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					{t('phone')}
				</Typography>

				<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
					{`+${receiver?.phone}` || 'N/A'}
				</Typography>

				<Typography variant="body2" fontWeight="bold" display="inline" padding={2} className={classes.card__item}>
					{t('address')}
				</Typography>
				<Typography
					variant="body2"
					display="inline"
					padding={2}
					className={classes.card__item}
					sx={{ gridColumn: '2 / -1' }}
				>
					{`${receiver?.address || ' '}, ${receiver?.city || ' '}, ${receiver?.district || ' '}-${
						receiver?.zipcode || ' '
					}, Bangladesh`}
				</Typography>
			</div>
		</Paper>
	);
};

ReceiverDetails.propTypes = {
	edit: PropTypes.bool,
	receiver: PropTypes.objectOf(PropTypes.any),
	setPreviewData: PropTypes.func,
};

ReceiverDetails.defaultProps = {
	edit: false,
	receiver: {},
	setPreviewData: () => {},
};

export default ReceiverDetails;
