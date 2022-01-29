/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { convertStringToKebabCase } from '../../utils/functions';
import InputFormHelperText from '../atoms/InputHelperText';

const SelectElement = ({
	label = 'Select Item',
	error = '',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	helperText = '',
	items = [],
	isRequired = false,
	...rest
}) => {
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-select-box`}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!error}
				data-testid={`${convertLabelStringToTestidPrefix}-select-control`}
			>
				<InputLabel
					htmlFor={`outlined-adornment-${label}`}
					data-testid={`${convertLabelStringToTestidPrefix}-select-label`}
				>
					<span>
						{label}
						{isRequired && <span style={{ color: 'red' }}>*</span>}
					</span>
				</InputLabel>

				<Select
					id={`outlined-adornment-${label}`}
					label={label}
					sx={elementStyles}
					{...rest}
					data-testid={`${convertLabelStringToTestidPrefix}-select`}
				>
					<MenuItem value="" data-testid={`${convertLabelStringToTestidPrefix}-select-item`}>
						<em>NONE</em>
					</MenuItem>

					{items.map((item) => (
						<MenuItem
							key={item?.id}
							value={item?.value}
							data-testid={`${convertLabelStringToTestidPrefix}-select-item`}
						>
							{item?.label}
						</MenuItem>
					))}
				</Select>

				<InputFormHelperText error={helperText} data-testid={`${convertLabelStringToTestidPrefix}-select-error-text`} />
			</FormControl>
		</Box>
	);
};

export default SelectElement;
