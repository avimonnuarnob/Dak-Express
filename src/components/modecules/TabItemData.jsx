/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const TabData = ({ children = null, value = '', index = '', ...rest }) => (
	<Box
		role="tabpanel"
		hidden={value !== index}
		id={`product-status-tabs-${index}`}
		aria-labelledby={`product-tabs-${index}`}
		{...rest}
	>
		{value === index && <Box>{children}</Box>}
	</Box>
);

TabData.propTypes = {
	children: PropTypes.element.isRequired,
	value: PropTypes.string.isRequired,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TabData;
