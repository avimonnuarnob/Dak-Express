/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const TextInputField = ({
	label = 'Input Element',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	rows = 1,
	isRequired = false,
	...props
}) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-input-box`}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!meta?.error && !!meta?.touched}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<InputLabel
					htmlFor={`outlined-adornment-${label}`}
					data-testid={`${convertLabelStringToTestidPrefix}-input-label`}
				>
					<span>
						{label}
						{isRequired && <span style={{ color: 'red' }}>*</span>}
					</span>
				</InputLabel>

				<OutlinedInput
					id={`outlined-adornment-${label}`}
					label={label}
					sx={elementStyles}
					minRows={rows}
					data-testid={`${convertLabelStringToTestidPrefix}-input`}
					{...props}
					{...field}
				/>

				{isRequired && meta?.error && meta?.touched && (
					<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
				)}
			</FormControl>
		</Box>
	);
};

TextInputField.propTypes = {
	label: PropTypes.string.isRequired,
	boxStyles: PropTypes.object,
	elementStyles: PropTypes.object,
	fullWidth: PropTypes.bool,
	isRequired: PropTypes.bool,
	props: PropTypes.object,
};

export default TextInputField;
