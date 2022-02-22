/* eslint-disable react/function-component-definition */
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 8,
	backgroundColor: theme.palette.common.white,
	px: 8,
	border: '1px solid #282B2B4D',
	// '&:hover': {
	// 	backgroundColor: alpha(theme.palette.common.white, 0.25),
	// },
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		// marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(2, 2, 2, 2),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));

const SearchBar = () => {
	const { t } = useTranslation();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Search>
				<SearchIconWrapper>
					<SearchIcon color="disabled" />
				</SearchIconWrapper>
				<StyledInputBase placeholder={t('search-here')} inputProps={{ 'aria-label': 'search' }} />
			</Search>
		</Box>
	);
};

export default SearchBar;
