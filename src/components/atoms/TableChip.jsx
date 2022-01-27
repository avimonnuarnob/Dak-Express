/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';

const TableChip = ({ label, color }) => {
	return (
		<Chip
			label={label}
			sx={{
				backgroundColor: color,
				color: (theme) => theme.palette.primary.white,
			}}
		/>
	);
};

TableChip.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default TableChip;
