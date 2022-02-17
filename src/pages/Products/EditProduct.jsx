/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useReducer } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../reducers/LoadingReducer';
import { sleep } from '../../utils/functions';
import PercelDetailsForm from '../Shipments/parts/PercelDetailsForm';
import validate from './validation/validate';

const EditProduct = () => {
	const [loading, dispatch] = useReducer(loadingReducer, initialState);

	// eslint-disable-next-line no-unused-vars
	const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();
	const navigateTo = useNavigate();
	const { id } = useParams();

	const initialValues = {
		products: [
			{
				productTitle: 'Wrapped chicken item',
				unitType: 'kg',
				weight: 2,
				quantity: 1,
				height: '10',
				width: '',
				length: '',
			},
		],
	};

	const onSubmit = (data, fn) => {
		console.log({ data, fn });

		try {
			dispatch(startLoading());
			sleep(3000).then(() => {
				fn.resetForm();
				dispatch(stopLoading());
				navigateTo('/products');
			});
		} catch (error) {
			console.log(error);
		}
	};

	const breadcrumbs = [
		{ title: 'Dashboard', link: 'dashboard' },
		{ title: 'All Products', link: 'products' },
		{ title: 'Edit Product', link: `products/edit/${id}`, current: true },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
		breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Grid container>
			<Grid item xs={12} mx={5}>
				<PageTitlebar title="Edit Product" link="/products" page="All Products" />
			</Grid>

			<Grid item xs={12} mx={2}>
				<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
					{(props) => (
						<Form>
							<Grid item xs={12} mx={4}>
								<PercelDetailsForm hideButton title="Product Details" {...props} />
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
										disabled={loading}
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
										{loading ? 'Editing Product...' : 'Edit Product'}
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

export default EditProduct;
