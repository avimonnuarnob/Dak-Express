/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { FormControl, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useField } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { convertStringToKebabCase } from '../../utils/functions';
import InputHelperText from '../atoms/InputHelperText';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(({ theme, checked }) => ({
	'.MuiFormControlLabel-label': checked && {
		color: theme.palette.secondary.main,
		fontWeight: 'bold',
	},
}));

const StyledControlledLabel = (props) => {
	const radioGroup = useRadioGroup();
	let checked = false;

	// eslint-disable-next-line react/destructuring-assignment
	if (radioGroup) checked = radioGroup.value === props.value;

	return <StyledFormControlLabel checked={checked} {...props} />;
};

StyledControlledLabel.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	value: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
	label: {
		fontWeight: 'bold !important',
		color: `${theme.palette.typography.main} !important`,
		marginRight: '15px !important',
		fontSize: '18px !important',
	},
	label__row: {
		display: 'flex !important',
		flexDirection: 'row !important',
		alignItems: 'center !important',
	},
	label__column: {
		display: 'flex !important',
		flexDirection: 'column !important',
		alignItems: 'center !important',
	},
}));

// eslint-disable-next-line no-unused-vars
const RadioInputField = ({ items = [], label = '', isRequired = false, onChange = null, value = '', ...props }) => {
	// eslint-disable-next-line no-unused-vars
	const [field, meta, helpers] = useField(props);

	const classes = useStyles();
	const convertLabelStringToTestidPrefix = convertStringToKebabCase(label);

	return (
		<FormControl className={props?.row ? classes.label__row : null} error={!!meta?.error && !!meta?.touched}>
			{label && (
				<FormLabel id={`${convertLabelStringToTestidPrefix}radio-buttons-group-label`} className={classes.label}>
					{label}
				</FormLabel>
			)}

			<RadioGroup
				aria-labelledby={`${convertLabelStringToTestidPrefix}radio-buttons-group-label`}
				{...props}
				{...field}
				value={value || field?.value}
				onChange={onChange || field?.onChange}
			>
				{items?.map((item) => (
					<StyledControlledLabel
						key={item?.id}
						value={item?.value}
						label={item?.label}
						control={<Radio color="secondary" />}
					/>
				))}
			</RadioGroup>

			{isRequired && meta?.error && meta?.touched && (
				<InputHelperText error={meta?.error} data-testid={`${convertLabelStringToTestidPrefix}-input-error-text`} />
			)}
		</FormControl>
	);
};

RadioInputField.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			value: PropTypes.string,
		})
	).isRequired,
	label: PropTypes.string,
	isRequired: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	// eslint-disable-next-line react/forbid-prop-types
	props: PropTypes.object,
};

export default RadioInputField;
