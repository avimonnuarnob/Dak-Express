import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { alpha, Box, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReplyMessageForm from './ReplyMessageForm';

const useStyles = makeStyles((theme) => ({
	button: {},
	box: {
		padding: theme.spacing(2, 2),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
		margin: theme.spacing(0, 0, 3, 0),

		'& h5': {
			color: theme.palette.status.pending,
			margin: theme.spacing(0, 0, 3, 0),
		},
	},
	button__replay: {
		backgroundColor: `${alpha(theme.palette.secondary.light, 0.08)} !important`,
		color: `${theme.palette.typography.sec} !important`,
		padding: '0.875rem 2rem !important',
		marginLeft: 'auto !important',
	},
	button__support: {
		backgroundColor: `${theme.palette.secondary.light} !important`,
		color: `${theme.palette.primary.white} !important`,
		padding: '0.875rem 2rem !important',
	},
}));

const ReplayMessage = ({ data }) => {
	const { t } = useTranslation();
	const classes = useStyles();
	const [showMessageForm, setShowMessageForm] = useState(false);

	const toggleMessageForm = () => setShowMessageForm((curState) => !curState);

	return (
		<>
			<Paper className={classes.box}>
				<Box className={classes.box__header}>
					<Typography variant="h5" fontWeight="bold">
						{t('reply-message')}
					</Typography>
				</Box>
				<Grid container sx={{ mt: 3 }}>
					<Grid item md={3}>
						<Typography fontWeight="600"> {t('reply')}</Typography>
					</Grid>
					<Grid item md={8}>
						{data?.issueReplies?.length > 0
							? data?.issueReplies?.map((reply) => (
									<Box sx={{ pl: 2, borderLeft: (theme) => `1px solid ${theme.palette.secondary.main}` }}>
										<Typography variant="h6" mb={2} color="typography.main">
											{reply?.messagedAt?.substring(0, 10)}{' '}
											{new Date(reply?.messagedAt)?.toLocaleTimeString('en', { hour12: true })}
										</Typography>
										<Typography sx={{ mb: 5 }}>{reply?.message}</Typography>
									</Box>
							  ))
							: null}
					</Grid>
				</Grid>
			</Paper>

			{!showMessageForm ? (
				<Box sx={{ display: 'flex', my: 3, gap: 2 }}>
					<Button
						variant="contained"
						startIcon={<ReplyAllIcon />}
						onClick={toggleMessageForm}
						className={classes.button__replay}
					>
						{t('reply')}
					</Button>
					<Link to="/supports/new" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button variant="contained" className={classes.button__support}>
							{t('get-another-support')}
						</Button>
					</Link>
				</Box>
			) : (
				<ReplyMessageForm toggleMessageForm={toggleMessageForm} />
			)}
		</>
	);
};

export default ReplayMessage;
