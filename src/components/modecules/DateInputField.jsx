/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { DateTimePicker, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Box, FormControl, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const DateInputField = ({
	type = null,
	label = 'Date Input',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	isRequired = false,
	...props
}) => {
	const [field, meta, helpers] = useField(props);
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	const onChange = (newDate) => helpers.setValue(newDate);

	if (type === 'date') {
		return (
			<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-input-box`}>
				<FormControl
					variant="outlined"
					fullWidth={fullWidth}
					error={!!meta?.error && !!meta?.touched}
					data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
				>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label={label}
							sx={elementStyles}
							{...props}
							{...field}
							onChange={onChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>

					{isRequired && meta?.error && meta?.touched && (
						<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
					)}
				</FormControl>
			</Box>
		);
	}

	if (type === 'time') {
		return (
			<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-input-box`}>
				<FormControl
					variant="outlined"
					fullWidth={fullWidth}
					error={!!meta?.error && !!meta?.touched}
					data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
				>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							label={label}
							sx={elementStyles}
							{...props}
							{...field}
							onChange={onChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>

					{isRequired && meta?.error && meta?.touched && (
						<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
					)}
				</FormControl>
			</Box>
		);
	}

	if (type === 'datetime') {
		return (
			<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-input-box`}>
				<FormControl
					variant="outlined"
					fullWidth={fullWidth}
					error={!!meta?.error && !!meta?.touched}
					data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
				>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DateTimePicker
							label={label}
							sx={elementStyles}
							{...props}
							{...field}
							onChange={onChange}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>

					{isRequired && meta?.error && meta?.touched && (
						<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
					)}
				</FormControl>
			</Box>
		);
	}

	return (
		<Typography variant="body1" color="error">
			Please Specify type Date | Time | Datetime
		</Typography>
	);
};

DateInputField.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	boxStyles: PropTypes.object,
	elementStyles: PropTypes.object,
	fullWidth: PropTypes.bool,
	isRequired: PropTypes.bool,
	props: PropTypes.object,
};

export default DateInputField;
