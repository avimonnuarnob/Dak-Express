import { useContext } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';

const useError = () => {
	const context = useContext(ErrorContext);

	if (context === undefined) {
		throw new Error('useError must be used within a ErrorProvider');
	}

	return context;
};

export default useError;
