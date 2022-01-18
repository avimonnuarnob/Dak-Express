import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useMemo } from 'react';
import { convertStringToKebabCase } from '../../utils/functions';

const InputHelperText = ({ error = '' }) => {
	const { focused } = useFormControl() || {};

	const errorStringToTestId = convertStringToKebabCase(error);

	const helperText = useMemo(() => {
		if (focused) {
			return null;
		}

		return error;
	}, [error, focused]);

	return <FormHelperText data-testid={errorStringToTestId}>{helperText}</FormHelperText>;
};

export default InputHelperText;
