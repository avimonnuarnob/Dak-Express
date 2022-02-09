/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperIcon from '../atoms/InputHelperIcon';
import InputHelperText from '../atoms/InputHelperText';

const PasswordInputField = ({
	label = 'Password',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	isRequired = false,
	...props
}) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);
	const [passwordVisibility, setPasswordVisibility] = useState({ showPassword: false });

	const handleClickOnIcon = useCallback(
		() => setPasswordVisibility({ ...passwordVisibility, showPassword: !passwordVisibility.showPassword }),
		[passwordVisibility]
	);

	const handleMouseDownOnIcon = useCallback((event) => event.preventDefault(), []);

	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box sx={boxStyles} autoComplete="off">
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!meta?.error && !!meta?.touched}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<InputLabel
					htmlFor={`${convertLabelStringToTestidPrefix}-input-label`}
					data-testid={`${convertLabelStringToTestidPrefix}-input-label`}
				>
					<span>
						{label}
						{isRequired && <span style={{ color: 'red' }}>*</span>}
					</span>
				</InputLabel>

				<OutlinedInput
					id={`${convertLabelStringToTestidPrefix}-input-label`}
					data-testid={`${convertLabelStringToTestidPrefix}-input`}
					type={passwordVisibility.showPassword ? 'text' : 'password'}
					label={
						<span>
							{label}
							{isRequired && <span style={{ color: 'red' }}>*</span>}
						</span>
					}
					sx={elementStyles}
					endAdornment={
						<InputHelperIcon
							visibility={passwordVisibility.showPassword}
							InitialIcon={VisibilityOffOutlinedIcon}
							ToggledIcon={VisibilityOutlinedIcon}
							onClick={handleClickOnIcon}
							onMouseDown={handleMouseDownOnIcon}
							position="end"
							edge="end"
						/>
					}
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

PasswordInputField.propTypes = {
	label: PropTypes.string.isRequired,
	boxStyles: PropTypes.object,
	elementStyles: PropTypes.object,
	fullWidth: PropTypes.bool,
	isRequired: PropTypes.bool,
	props: PropTypes.object,
};

export default PasswordInputField;
