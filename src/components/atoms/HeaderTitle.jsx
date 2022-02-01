/* eslint-disable import/no-extraneous-dependencies */
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const HeaderTitle = ({ label }) => (
	<Typography
		variant="h4"
		fontWeight="bold"
		sx={{
			color: 'typography.main',
		}}
	>
		{label}
	</Typography>
);

HeaderTitle.propTypes = {
	label: PropTypes.string.isRequired,
};

export default HeaderTitle;
