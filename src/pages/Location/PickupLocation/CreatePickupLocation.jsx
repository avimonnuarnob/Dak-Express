import { Alert, Box, Button, CircularProgress, Grid, Paper, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { locationUrls, methods, types } from '../../../apis/urls';
import useAxios from '../../../apis/useAxios';
import ErrorAlert from '../../../components/atoms/ErrorAlert';
import PageTitlebar from '../../../components/modecules/PageTitlebar';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../components/modecules/SelectInputField';
import TextInputField from '../../../components/modecules/TextInputField';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import { cities, districts } from '../../../utils/constants';
import { sleep } from '../../../utils/functions';
import initialValues from './validation/initialValues';
import validate from './validation/validate';

const useStyles = makeStyles((theme) => ({
	pickup: {},
	form: {},
	form__header: {
		marginBottom: theme.spacing(3),
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
	},
	'pickup__button--back': {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	pickup__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	pickup__actions: {
		margin: '10px auto !important',
		display: 'flex',
		gap: '15px',
	},
}));

const CreatePickupLocation = () => {
	const { t } = useTranslation();
	const [successAlert, setSuccessAlert] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { loading, requestToServerWith } = useAxios();
	const navigateTo = useNavigate();
	const classes = useStyles();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('pickup-locations'), link: 'locations/pickup' },
			{
				title: t('add-new-pickup-location'),
				link: 'locations/pickup/new',
				current: true,
			},
		],
		[t]
	);

	const handleSubmitPickupLocation = async (data, fn) => {
		try {
			const response = await requestToServerWith({
				url: locationUrls.locations,
				method: methods.POST,
				data: { ...data, type: types.pickup || 'PICKUP' },
			});

			if ([200, 201].includes(response?.status)) {
				fn.resetForm();
				setSuccessAlert(true);
				await sleep(2000);
				navigateTo(`/locations/pickup/${response?.data?.id}`);
			}
			// eslint-disable-next-line no-shadow
		} catch (error) {
			console.debug(error);
		}
	};

	const handleCloseSuccessBar = () => setSuccessAlert(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<PageTitlebar
				title={t('add-new-pickup-location')}
				link="/locations/pickup"
				page={t('back-to-pickup-locations')}
			/>

			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={handleSubmitPickupLocation}
				enableReinitialize
			>
				{() => (
					<Form>
						<Paper sx={{ py: 4, px: 6, mt: 3 }}>
							<Box className={classes.form__header}>
								<Typography fontSize="24px" fontWeight="bold" sx={{ color: 'status.pending', mb: 3 }}>
									{t('pickup-location-details')}
								</Typography>
							</Box>

							<ErrorAlert />

							<fieldset disabled={loading} style={{ border: 'none' }}>
								<Grid container spacing={2}>
									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth isRequired label={t('first-name')} name="firstName" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth isRequired label={t('last-name')} name="lastName" />
									</Grid>

									<Grid item md={12} sm={12} xs={12}>
										<TextInputField fullWidth isRequired label={t('business-name')} name="businessName" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<PhoneNumberInputField fullWidth isRequired label={t('phone')} name="phone" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<SelectInputField
											items={districts}
											fullWidth
											isRequired
											label={t('district-state')}
											name="district"
										/>
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<SelectInputField items={cities} fullWidth isRequired label={t('city-town')} name="city" />
									</Grid>

									<Grid item md={6} sm={6} xs={12}>
										<TextInputField fullWidth isRequired label={t('post-code')} name="zipcode" />
									</Grid>

									<Grid item md={12} sm={12} xs={12}>
										<TextInputField fullWidth isRequired label={t('address')} name="address" />
									</Grid>
								</Grid>
							</fieldset>
						</Paper>

						<div className={classes.pickup__actions}>
							<Button
								type="button"
								variant="outlined"
								disabled={false}
								onClick={() => navigateTo(-1)}
								sx={{ ml: 'auto !important' }}
								className={classes['pickup__button--back']}
							>
								{t('cancel')}
							</Button>

							<Button
								type="submit"
								variant="contained"
								disabled={loading}
								endIcon={loading && <CircularProgress size={20} color="inherit" />}
								className={classes.pickup__button}
							>
								{loading ? t('submitting') : t('submit')}
							</Button>
						</div>
					</Form>
				)}
			</Formik>

			<Snackbar
				open={successAlert}
				autoHideDuration={6000}
				onClose={handleCloseSuccessBar}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={handleCloseSuccessBar}
					variant="filled"
					severity="success"
					color="secondary"
					sx={{ width: '100%' }}
				>
					Pickup Location Saved Successfully!
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default CreatePickupLocation;
