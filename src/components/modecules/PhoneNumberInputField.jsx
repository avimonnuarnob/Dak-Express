/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { useField } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const useStyles = makeStyles({
	input: {
		minWidth: '100% !important',
	},
});

const PhoneNumberInputField = ({ label = 'Phone', fullWidth = false, isRequired = false, ...props }) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	const classes = useStyles();

	// eslint-disable-next-line no-unused-vars
	const onChange = (phoneNumber, country, e) => {
		helpers.setValue(phoneNumber);
	};

	return (
		<Box sx={{ minWidth: '100% !important' }}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!meta?.error && !!meta?.touched}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<PhoneInput
					specialLabel={label}
					inputProps={{ name: props?.name, id: `input-adornment-${label}` }}
					country="bd"
					enableSearch
					inputStyle={{ minWidth: '100% !important' }}
					containerStyle={{ width: '100% !important' }}
					inputClass={classes.input}
					autoFormat={false}
					value=""
					{...props}
					{...field}
					onChange={onChange}
				/>

				{isRequired && meta?.error && meta?.touched && (
					<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
				)}
			</FormControl>
		</Box>
	);
};

PhoneNumberInputField.propTypes = {
	label: PropTypes.string.isRequired,
	boxStyles: PropTypes.object,
	elementStyles: PropTypes.object,
	fullWidth: PropTypes.bool,
	isRequired: PropTypes.bool,
	props: PropTypes.object,
};

export default PhoneNumberInputField;
