/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { LanguageProvider } from '../reducers/LanguageReducer';

const ContextProvider = ({ children = null }) => <LanguageProvider>{children}</LanguageProvider>;

ContextProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default ContextProvider;
