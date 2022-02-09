/* eslint-disable react/jsx-props-no-spreading */
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';
import { useField } from 'formik';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const useStyles = makeStyles((theme) => ({
	checkbox: {
		display: 'flex !important',
		flexDirection: 'row !important',
		alignItems: 'center',
	},
	checkbox__label: {
		fontWeight: 'bold !important',
		color: `${theme.palette.typography.main} !important`,
		marginRight: '15px !important',
		fontSize: '18px !important',
	},
	checkbox__input: {
		color: `${theme.palette.secondary.main} !important`,
	},
}));

const CheckboxInputField = ({ items = [], label = '', isRequired = false, ...props }) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);

	const classes = useStyles();

	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<FormControl className={props?.row ? classes.checkbox : null}>
			{label && (
				<FormLabel
					id={`${convertLabelStringToTestidPrefix}radio-buttons-group-label`}
					className={classes.checkbox__label}
					component="legend"
				>
					{label}
				</FormLabel>
			)}

			<FormGroup
				aria-labelledby={`${convertLabelStringToTestidPrefix}checkbox-buttons-group-label`}
				className={props?.row ? classes.checkbox : null}
			>
				{items?.map((item) => (
					<FormControlLabel
						key={item?.id}
						control={<Checkbox {...props} {...field} className={classes.checkbox__input} />}
						label={item?.label}
						value={item?.value}
					/>
				))}
			</FormGroup>

			{isRequired && meta?.error && meta?.touched && (
				<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
			)}
		</FormControl>
	);
};

export default CheckboxInputField;
