import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import useLanguage from '../../hooks/useLanguage';
import { changeLanguage } from '../../reducers/LanguageReducer';
import LanguageItem from '../atoms/LanguageItem';

const languages = [
	{ key: 'english', value: 'ENGLISH' },
	{ key: 'bangla', value: 'BANGLA' },
];

const Language = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const { state: language, dispatch } = useLanguage();

	const open = Boolean(anchorEl);
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const changeLanguageOnSelect = (lang) => () => {
		dispatch(changeLanguage(lang?.value));
		localStorage.setItem('language', lang?.value);
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
				<LanguageItem language={language} lightText navItem />
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

export default Language;
