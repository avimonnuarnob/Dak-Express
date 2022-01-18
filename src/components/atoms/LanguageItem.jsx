import { Box } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import banglaLanguageIcon from '../../assets/bangla-language-icon.svg';
import englishLanguageIcon from '../../assets/english-language-icon.svg';

const LanguageItem = ({ language = 'ENGLISH', lightText = false, navItem = false }) => {
	const languageItemImageStyle = navItem ? { height: 18, width: 28 } : { width: 44, height: 26 };
	const lang = localStorage.getItem('language');

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<img
				src={language === 'BANGLA' ? banglaLanguageIcon : englishLanguageIcon}
				alt="Language"
				style={languageItemImageStyle}
			/>

			<Box
				sx={{ marginLeft: 2 }}
				// eslint-disable-next-line no-nested-ternary
				color={`${lightText ? 'white' : lang === language ? 'primary.light' : 'primary.main'}`}
			>
				{language === 'BANGLA' ? 'বাংলা' : 'ENGLISH'}
			</Box>
		</Box>
	);
};

LanguageItem.propTypes = {
	language: PropTypes.string.isRequired,
	lightText: PropTypes.bool,
	navItem: PropTypes.bool,
};

LanguageItem.defaultProps = {
	lightText: false,
	navItem: false,
};

export default LanguageItem;
