import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Grid } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ProductsTable from './parts/ProductsTable';

const breadcrumbs = [
	{ title: 'Dashboard', link: 'dashboard' },
	{ title: 'All Products', link: 'products', current: true },
];
const Products = () => {
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Grid container>
			<Grid item xs={12}>
				<PageTitlebar title="All Products" />
			</Grid>

			<Grid item xs={12} mx={2} sx={{ mb: 2 }}>
				<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
					<Link to="/products/new" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1, m: 1 }} startIcon={<AddOutlinedIcon />}>
							Add New Product
						</Button>
					</Link>
				</Box>
			</Grid>

			<Grid item xs={12}>
				<ProductsTable />
			</Grid>
		</Grid>
	);
};

export default Products;
