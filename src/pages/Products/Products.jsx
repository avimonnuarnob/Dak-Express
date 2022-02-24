import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Grid } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import ProductsTable from './parts/ProductsTable';

const Products = () => {
	const { t } = useTranslation();
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('all-products'), link: 'products', current: true },
		],
		[t]
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Grid container px={3} py={2}>
			<Grid item xs={12}>
				<PageTitlebar title={t('all-products')} page={t('back-to-dashboard')} />
			</Grid>

			<Grid item xs={12} mt={2}>
				<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
					<Link to="/products/new" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button variant="outlined" color="secondary" sx={{ px: 2, py: 1 }} startIcon={<AddOutlinedIcon />}>
							{t('add-new-product')}
						</Button>
					</Link>
				</Box>
			</Grid>

			<Grid item xs={12} mt={2}>
				<ProductsTable />
			</Grid>
		</Grid>
	);
};

export default Products;
