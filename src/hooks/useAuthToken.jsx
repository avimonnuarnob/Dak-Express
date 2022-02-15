import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuthToken = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuthToken must be used within a AuthProvider');
	}

	return context;
};

export default useAuthToken;
