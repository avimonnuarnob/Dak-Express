import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../hooks/useLanguage';
import { changeLanguage } from '../../reducers/LanguageReducer';
import LanguageItem from '../atoms/LanguageItem';

const languages = [
	{ key: 'english', label: 'ENGLISH', value: 'en' },
	{ key: 'bangla', label: 'BANGLA', value: 'bn' },
];

const Language = ({ lightText = true }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { i18n } = useTranslation();
	const { state: language, dispatch } = useLanguage();

	const open = Boolean(anchorEl);
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const changeLanguageOnSelect = (lang) => () => {
		dispatch(changeLanguage(lang?.value));
		localStorage.setItem('language', lang?.value);
		i18n.changeLanguage(lang?.value);
		handleClose();
	};

	return (
		<>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<LanguageItem language={language} lightText={lightText} navItem />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{ 'aria-labelledby': 'basic-button' }}
				PaperProps={{ style: { width: 160 } }}
			>
				{languages?.map((lang) => (
					<MenuItem key={lang?.key} onClick={changeLanguageOnSelect(lang)}>
						<LanguageItem language={lang?.value} />
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

Language.propTypes = {
	// eslint-disable-next-line react/require-default-props
	lightText: PropTypes.bool.isRequired,
};

Language.defaultProps = {
	// eslint-disable-next-line react/default-props-match-prop-types
	lightText: true,
};

export default Language;
