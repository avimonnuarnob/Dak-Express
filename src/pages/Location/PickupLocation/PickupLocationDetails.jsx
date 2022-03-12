import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button, Chip, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { locationUrls, methods } from '../../../apis/urls';
import useAxios from '../../../apis/useAxios';
import PageTitlebar from '../../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';

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

const PickupLocationDetails = () => {
	const { t } = useTranslation();
	const [location, setLocation] = useState({});
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { requestToServerWith } = useAxios();
	const { id } = useParams();
	const classes = useStyles();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('pickup-locations'), link: 'locations/pickup' },
			{ title: id, link: `locations/pickup/${id}`, current: true },
		],
		[id, t]
	);

	// eslint-disable-next-line no-unused-vars
	const getPickupLocation = async (options) => {
		try {
			const response = await requestToServerWith({
				url: `${locationUrls.locations}/${id}`,
				method: methods.GET,
			});

			if ([200, 201].includes(response?.status)) {
				setLocation(response?.data);
			}
			// eslint-disable-next-line no-shadow
		} catch (error) {
			console.debug(error);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	useEffect(() => {
		getPickupLocation();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar
				title={
					<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
						<Typography variant="h4" fontWeight="bold" sx={{ color: 'typography.main' }}>
							{t('location')}
						</Typography>
						<Chip label={t('pickup-locations')} color="secondary" size="small" />
					</Box>
				}
				page={t('pickup-locations')}
				link="/locations/pickup"
			/>

			<Paper sx={{ p: 2, mt: 3 }}>
				<Box className={classes.card__header}>
					<Typography fontSize="24px" fontWeight="bold" sx={{ color: 'status.pending' }}>
						{t('pickup-location-details')}
					</Typography>
					<Box sx={{ ml: 'auto' }}>
						<Link to={`/locations/pickup/${id}/edit`} style={{ textDecoration: 'none', color: 'inherit' }}>
							<Button
								sx={{ width: '100%' }}
								size="small"
								variant="outlined"
								className={classes.button__edit}
								startIcon={<EditOutlinedIcon />}
							>
								{t('edit')}
							</Button>
						</Link>
					</Box>
				</Box>

				<div className={classes.card__body}>
					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ gridColumn: '1' }}
					>
						{t('first-name')}
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
						{location?.firstName}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ borderLeft: { sm: '1px solid #E5EBF0' } }}
					>
						{t('last-name')}
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
						{location?.lastName}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ gridColumn: '1' }}
					>
						{t('business-name')}
					</Typography>

					<Typography
						variant="body2"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ gridColumn: '2/-1' }}
					>
						{location?.businessName}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ gridColumn: '1' }}
					>
						{t('district')}
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
						{location?.district}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ borderLeft: { sm: '1px solid #E5EBF0' } }}
					>
						{t('city')}
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
						{location?.city}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ gridColumn: '1' }}
					>
						{t('post-code')}
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
						{location?.zipcode}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ borderLeft: { sm: '1px solid #E5EBF0' } }}
					>
						{t('mobile-number')}
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__body__item}>
						{location?.phone}
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__body__item}
					>
						{t('address')}
					</Typography>
					<Typography
						variant="body2"
						display="inline"
						padding={2}
						className={classes.card__body__item}
						sx={{ gridColumn: '2 / -1' }}
					>
						{location?.address}
					</Typography>
				</div>
			</Paper>
		</Box>
	);
};

export default PickupLocationDetails;
