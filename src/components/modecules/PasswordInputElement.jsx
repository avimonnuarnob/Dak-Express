/* eslint-disable react/jsx-props-no-spreading */
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useCallback, useState } from 'react';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperIcon from '../atoms/InputHelperIcon';
import InputHelperText from '../atoms/InputHelperText';

const PasswordInputElement = ({
	label = 'Password',
	error = '',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	helperText = '',
	isRequired = false,
	...rest
}) => {
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
				error={!!error}
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
					{...rest}
				/>

				<InputHelperText error={helperText} />
			</FormControl>
		</Box>
	);
};

export default PasswordInputElement;
