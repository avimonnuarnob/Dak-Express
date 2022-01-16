import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const useLanguage = () => {
	const context = useContext(LanguageContext);

	if (context === undefined) {
		throw new Error('useLanguage must be used within a CounterProvider');
	}

	return context;
};

export default useLanguage;
