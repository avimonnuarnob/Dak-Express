/* eslint-disable react/jsx-props-no-spreading */
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useBreadcrumb from '../../hooks/useBreadcrumb';

const BreadcrumbItems = () => {
	const { state: breadcrumbs } = useBreadcrumb();

	return (
		<Breadcrumbs
			sx={{ marginLeft: '15px' }}
			aria-label="breadcrumb"
			separator={<NavigateNextIcon fontSize="small" />}
			noWrap
		>
			{breadcrumbs?.map((breadcrumb) => (
				<Link key={breadcrumb?.title} to={breadcrumb?.link} style={{ color: 'inherit', textDecoration: 'none' }}>
					<Typography
						key={breadcrumb?.title}
						sx={{ color: breadcrumb?.current ? (theme) => `${theme.palette.primary.light} !important` : 'inherit' }}
					>
						{breadcrumb?.title}
					</Typography>
				</Link>
			))}
		</Breadcrumbs>
	);
};

export default BreadcrumbItems;
