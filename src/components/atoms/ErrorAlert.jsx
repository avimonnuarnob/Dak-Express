/* eslint-disable react/jsx-no-useless-fragment */
import Alert from '@mui/material/Alert';
import useError from '../../hooks/useError';
import { removeError } from '../../reducers/ErrorReducer';

const ErrorAlert = () => {
	const { state, dispatch } = useError();

	const closeErrorAlert = () => dispatch(removeError());

	if (!state) {
		return null;
	}

	return (
		<Alert severity="error" sx={{ m: 1.5, boxShadow: 0, py: 1.5 }} onClose={closeErrorAlert}>
			{state}
		</Alert>
	);
};

export default ErrorAlert;
