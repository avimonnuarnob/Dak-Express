import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	quickLinks: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
		gap: theme.spacing(2),

		margin: theme.spacing(3, 0),
	},

	quickLinks__item__icon: {
		width: '3.75rem',
		aspectRatio: '1/1',
		padding: theme.spacing(1),
		borderRadius: '50%',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
}));

const QuickLinks = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Box sx={{ mt: 3, color: (theme) => theme.palette.typography.main }}>
			<Typography
				sx={{
					typography: { sm: 'h5', xs: 'h6' },
					fontWeight: '600 !important',
				}}
			>
				{t('dashboard-quick-links')}
			</Typography>

			<Box className={classes.quickLinks}>
				<Paper>
					<Link to="/new-shipment" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Box sx={{ textAlign: 'center', px: 3, py: 2 }}>
							<Box className={classes.quickLinks__item__icon} sx={{ background: '#82A52B33' }}>
								<AddToPhotosOutlinedIcon sx={{ color: (theme) => theme.palette.secondary.main }} />
							</Box>

							<Typography sx={{ mt: 2, fontWeight: '600 !important' }}>
								{t('dashboard-quick-link-shipments')}
							</Typography>
						</Box>
					</Link>
				</Paper>

				<Paper>
					<Link to="/transactions" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Box sx={{ textAlign: 'center', px: 3, py: 2 }}>
							<Box className={classes.quickLinks__item__icon} sx={{ background: '#ECFBE6' }}>
								<HistoryOutlinedIcon sx={{ color: (theme) => theme.palette.status.success }} />
							</Box>

							<Typography sx={{ my: 2, fontWeight: '600 !important' }}>
								{t('dashboard-quick-link-transactions')}
							</Typography>
						</Box>
					</Link>
				</Paper>

				<Paper>
					<Link to="/locations/pickup" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Box sx={{ textAlign: 'center', px: 3, py: 2 }}>
							<Box className={classes.quickLinks__item__icon} sx={{ background: '#FFF6E9' }}>
								<AddLocationOutlinedIcon sx={{ color: (theme) => theme.palette.status.pending }} />
							</Box>

							<Typography sx={{ my: 2, fontWeight: '600 !important' }}>
								{t('dashboard-quick-link-locations')}
							</Typography>
						</Box>
					</Link>
				</Paper>

				<Paper>
					<Link to="/supports" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Box sx={{ textAlign: 'center', px: 3, py: 2 }}>
							<Box className={classes.quickLinks__item__icon} sx={{ background: '#E306131A' }}>
								<QuizOutlinedIcon sx={{ color: (theme) => theme.palette.status.failed }} />
							</Box>

							<Typography sx={{ my: 2, fontWeight: '600 !important' }}>{t('dashboard-quick-link-supports')}</Typography>
						</Box>
					</Link>
				</Paper>
			</Box>
		</Box>
	);
};

export default QuickLinks;
