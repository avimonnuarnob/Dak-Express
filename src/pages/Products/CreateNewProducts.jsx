/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useReducer } from 'react';
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

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'All Products', link: 'products' },
	{ title: 'Create New Product', link: 'products/new', current: true },
];

const CreateNewProduct = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);

	// eslint-disable-next-line no-unused-vars
	const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();
	const navigateTo = useNavigate();

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Grid container>
			<Grid item xs={12} mx={5}>
				<PageTitlebar title="Create New Product" link="/products" page="All Products" />
			</Grid>

			<Grid item xs={12} mx={2}>
				<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
					{(props) => (
						<Form>
							<Grid item xs={12} mx={4}>
								<PercelDetailsForm title="Product Details" {...props} />
							</Grid>

							<Grid item xs={12} mx={4}>
								<DangerousGoodsDeclaration {...props} />
							</Grid>

							<Grid item xs={12} mx={4}>
								<Box sx={{ m: 2, display: 'flex', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
									<Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
										<Button variant="outlined" type="button" size="large" color="secondary" sx={{ px: 4 }}>
											Cancel
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
										{loading ? 'Saving Product...' : 'Save Product'}
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
