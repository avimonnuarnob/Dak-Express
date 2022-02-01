/* eslint-disable prettier/prettier */
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const PhoneNumberInput = ({
	label = 'Phone',
	error = false,
	name = '',
	helperText = '',
	fullWidth = null,
	handleChange = null,
	handleBlur = null,
	...rest
}) => {
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	const onValueChange = (phoneNumber, country, e) => {
		handleChange(e);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!error}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<PhoneInput
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...rest}
					specialLabel={label}
					inputProps={{ name, id: `input-adornment-${label}` }}
					country="bd"
					enableSearch
					inputStyle={{ width: '100%' }}
					onChange={onValueChange}
					onBlur={handleBlur}
					name={name}
					autoFormat={false}
				/>
				<InputHelperText
					error={helperText}
					data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`}
				/>
			</FormControl>
		</Box>
	);
};

export default PhoneNumberInput;
