/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useMemo, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../reducers/LoadingReducer';
import { sleep } from '../../utils/functions';
import DangerousGoodsDeclaration from '../Shipments/parts/DangerousGoodsDeclaration';
import PercelDetailsForm from '../Shipments/parts/PercelDetailsForm';
import initialValues from './validation/initialValues';
import validate from './validation/validate';

const CreateNewProduct = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();
	const navigateTo = useNavigate();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('all-products'), link: 'products' },
			{ title: t('add-new-product'), link: 'products/new', current: true },
		],
		[t]
	);

	const onSubmit = (data, fn) => {
		console.log({ data, fn });

		try {
			dispatch(startLoading());
			sleep(2000).then(() => {
				fn.resetForm();
				dispatch(stopLoading());
				navigateTo('/products');
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
	}, [breadcrumbDispatcher, breadcrumbs]);

	return (
		<Grid container px={3} py={2}>
			<Grid item xs={12}>
				<PageTitlebar title={t('add-new-product')} link="/products" page={t('back-to-all-products')} />
			</Grid>

			<Grid item xs={12} mt={2}>
				<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
					{(props) => (
						<Form>
							<Grid item xs={12}>
								<PercelDetailsForm title={t('product-details')} {...props} />
							</Grid>

							<Grid item xs={12}>
								<DangerousGoodsDeclaration {...props} />
							</Grid>

							<Grid item xs={12}>
								<Box sx={{ my: 2, display: 'flex', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
									<Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
										<Button variant="outlined" type="button" size="large" color="secondary" sx={{ px: 4 }}>
											{t('cancel')}
										</Button>
									</Link>

									<Box sx={{ m: 1 }} />

									<Button
										disabled={!props?.values?.noDangerousGoods || loading}
										variant="contained"
										type="submit"
										size="large"
										color="secondary"
										endIcon={loading && <CircularProgress size={20} color="inherit" />}
										sx={{
											px: 12,
											'&:disabled': {
												color: (theme) => `${theme.palette.primary.disable} !important`,
												background: (theme) => `${theme.palette.secondary.sec} !important`,
											},
										}}
									>
										{loading ? t('saving-product') : t('save-product')}
									</Button>
								</Box>
							</Grid>
						</Form>
					)}
				</Formik>
			</Grid>
		</Grid>
	);
};

export default CreateNewProduct;
