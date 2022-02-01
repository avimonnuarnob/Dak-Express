/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ActionButton = ({ Icon, color, label, sx }) => {
	return (
		<Button
			variant="outlined"
			sx={{
				borderColor: color,
				bgcolor: (theme) => theme.palette.primary.white,
				py: 1,
				...sx,
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
				letterSpacing={1}
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

ActionButton.propTypes = {
	Icon: PropTypes.elementType.isRequired,
	color: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	sx: PropTypes.objectOf(PropTypes.any),
};

ActionButton.defaultProps = {
	sx: {},
};

export default ActionButton;
