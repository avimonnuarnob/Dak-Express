/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const DateInput = ({
	label = 'Input Element',
	error = '',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	helperText = '',
	...rest
}) => {
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box
			sx={boxStyles}
			autoComplete="off"
			data-testid={`${convertLabelStringToTestidPrefix}-input-box`}
		>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!error}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label={label}
						sx={elementStyles}
						{...rest}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>

				{helperText && (
					<InputHelperText
						error={helperText}
						data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`}
					/>
				)}
			</FormControl>
		</Box>
	);
};

export default DateInput;
