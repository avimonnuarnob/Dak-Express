/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const InputElement = ({
	label = 'Input Element',
	error = '',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	helperText = '',
	rows = 1,
	...rest
}) => {
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-input-box`}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!error}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<InputLabel
					htmlFor={`outlined-adornment-${label}`}
					data-testid={`${convertLabelStringToTestidPrefix}-input-label`}
				>
					{label}
				</InputLabel>

				<OutlinedInput
					id={`outlined-adornment-${label}`}
					label={label}
					sx={elementStyles}
					minRows={rows}
					{...rest}
					data-testid={`${convertLabelStringToTestidPrefix}-input`}
				/>

				<InputHelperText error={helperText} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
			</FormControl>
		</Box>
	);
};

export default InputElement;
