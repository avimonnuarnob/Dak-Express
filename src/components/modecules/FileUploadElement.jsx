/* eslint-disable react/jsx-props-no-spreading */
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box, FormControl, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
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

const FileUploadElement = ({
	label = 'Label',
	error = '',
	boxStyles = {},
	elementStyles = {},
	fullWidth = false,
	helperText = '',
	...rest
}) => {
	const classes = useStyles();

	return (
		<Box sx={boxStyles} autoComplete="off">
			<FormControl variant="outlined" fullWidth={fullWidth} error={!!error}>
				<TextField
					className={classes.fileUploadInput}
					id={`outlined-adornment-${label}`}
					sx={elementStyles}
					label={label}
					focused
					InputProps={{
						endAdornment: <InputHelperIcon visibility InitialIcon={FileUploadOutlinedIcon} position="end" edge="end" />,
					}}
					{...rest}
				/>

				<InputHelperText error={helperText} />
			</FormControl>
		</Box>
	);
};

export default FileUploadElement;
