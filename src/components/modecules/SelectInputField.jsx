/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useField } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import * as React from 'react';
import { convertStringToKebabCase } from '../../utils/functions';
import InputFormHelperText from '../atoms/InputHelperText';

const SelectInputField = ({
	label = 'Select Item',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	items = [],
	isRequired = false,
	...props
}) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box sx={boxStyles} autoComplete="off" data-testid={`${convertLabelStringToTestidPrefix}-select-box`}>
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!meta?.error && !!meta?.touched}
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
					data-testid={`${convertLabelStringToTestidPrefix}-select`}
					{...props}
					{...field}
				>
					<MenuItem value="" data-testid={`${convertLabelStringToTestidPrefix}-select-item`}>
						<em>NONE</em>
					</MenuItem>

					{items?.map((item) => (
						<MenuItem
							key={item?.id}
							value={item?.value}
							data-testid={`${convertLabelStringToTestidPrefix}-select-item`}
						>
							{item?.label}
						</MenuItem>
					))}
				</Select>

				{isRequired && meta?.error && meta?.touched && (
					<InputFormHelperText
						error={meta?.error}
						data-testid={`${convertLabelStringToTestidPrefix}-select-error-text`}
					/>
				)}
			</FormControl>
		</Box>
	);
};

SelectInputField.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			label: PropTypes.string,
			value: PropTypes.string,
		})
	).isRequired,
	label: PropTypes.string.isRequired,
	boxStyles: PropTypes.object,
	elementStyles: PropTypes.object,
	fullWidth: PropTypes.bool,
	isRequired: PropTypes.bool,
	props: PropTypes.object,
};

export default SelectInputField;
