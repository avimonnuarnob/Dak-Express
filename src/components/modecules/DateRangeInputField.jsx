/* eslint-disable react/jsx-props-no-spreading */
// import { useField } from 'formik';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { convertStringToKebabCase } from '../../utils/functions';

const DateRangeInputField = ({
	startLabel = '',
	endLabel = '',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	// isRequired = false,
	...props
}) => {
	// eslint-disable-next-line no-unused-vars
	// const [field, meta, helpers] = useField(props);
	const [value, setValue] = useState([null, null]);
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(startLabel + endLabel);

	// const onChange = (newDate) => helpers.setValue(newDate);

	return (
		<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-input-box`}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				// error={!!meta?.error && !!meta?.touched}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateRangePicker
						startText={startLabel}
						endText={endLabel}
						sx={elementStyles}
						value={value}
						onChange={(newValue) => {
							setValue(newValue);
						}}
						{...props}
						// {...field}
						renderInput={(startProps, endProps) => (
							<>
								<TextField {...startProps} />
								<Box sx={{ mx: 1 }}>
									<span style={{ fontSize: '14px', fontFamily: 'Inter !important' }}>TO</span>
								</Box>
								<TextField {...endProps} />
							</>
						)}
					/>
				</LocalizationProvider>

				{/* {isRequired && meta?.error && meta?.touched && (
					<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
				)} */}
			</FormControl>
		</Box>
	);
};

export default DateRangeInputField;
