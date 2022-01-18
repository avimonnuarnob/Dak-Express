/* eslint-disable react/jsx-props-no-spreading */
import { IconButton, InputAdornment } from '@mui/material';

const InputFormHelperIcon = ({
	visibility,
	InitialIcon = null,
	ToggledIcon = null,
	position = 'start',
	edge = 'start',
	...rest
}) => (
	<InputAdornment position={position}>
		<IconButton aria-label="toggle visibility" edge={edge} {...rest}>
			{/* eslint-disable-next-line no-nested-ternary */}
			{ToggledIcon ? visibility ? <InitialIcon /> : <ToggledIcon /> : <InitialIcon />}
		</IconButton>
	</InputAdornment>
);

export default InputFormHelperIcon;
