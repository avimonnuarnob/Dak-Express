/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';

const TableActionButton = ({ Icon, color, label }) => {
	return (
		<Button
			variant="outlined"
			sx={{
				borderColor: color,
				py: 1,
			}}
		>
			<Icon
				sx={{
					fontSize: '14px',
					color,
				}}
			/>
			<Typography
				fontSize="10px"
				sx={{
					fontWeight: 'bold',
					ml: 1,
					color,
				}}
			>
				{label}
			</Typography>
		</Button>
	);
};

TableActionButton.propTypes = {
	Icon: PropTypes.element.isRequired,
	color: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default TableActionButton;
