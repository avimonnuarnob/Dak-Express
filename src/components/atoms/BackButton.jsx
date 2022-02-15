/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BackButton = ({ redirectTo, label }) => (
	<Link to={redirectTo} style={{ textDecoration: 'none', marginLeft: 'auto' }}>
		<Button sx={{ display: 'flex', alignItems: 'center' }}>
			<ArrowBackIosNewIcon fontSize="small" />
			<Typography variant="body2" sx={{ color: 'typography.main', ml: 1 }}>
				{label}
			</Typography>
		</Button>
	</Link>
);

BackButton.propTypes = {
	redirectTo: PropTypes.string,
	label: PropTypes.string,
};

BackButton.defaultProps = {
	redirectTo: '/dashboard',
	label: 'Back To Dashboard',
};

export default BackButton;
