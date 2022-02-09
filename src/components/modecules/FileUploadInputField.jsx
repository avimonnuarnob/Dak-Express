/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box, FormControl, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useField } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperIcon from '../atoms/InputHelperIcon';
import InputHelperText from '../atoms/InputHelperText';

const useStyles = makeStyles(() => ({
	fileUploadInput: {
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#282B2B4D',
			},
		},

		'& label.Mui-focused': {
			color: '#282B2B99',
		},
	},
}));

const FileUploadInputField = ({
	label = 'Label',
	boxStyles = {},
	elementStyles = {},
	isRequired = false,
	fullWidth = false,
	...props
}) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);

	const classes = useStyles();
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<Box sx={boxStyles} autoComplete="off">
			<FormControl
				variant="outlined"
				fullWidth={fullWidth}
				error={!!meta?.error && !!meta?.touched}
				data-testid={`${convertLabelStringToTestidPrefix}-input-control`}
			>
				<TextField
					focused
					className={classes.fileUploadInput}
					id={`outlined-adornment-${label}`}
					sx={elementStyles}
					label={label}
					data-testid={`${convertLabelStringToTestidPrefix}-input`}
					InputProps={{
						endAdornment: <InputHelperIcon visibility InitialIcon={FileUploadOutlinedIcon} position="end" edge="end" />,
					}}
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

FileUploadInputField.propTypes = {
	label: PropTypes.string.isRequired,
	boxStyles: PropTypes.object,
	elementStyles: PropTypes.object,
	fullWidth: PropTypes.bool,
	isRequired: PropTypes.bool,
	props: PropTypes.object,
};

export default FileUploadInputField;
