/* eslint-disable react/jsx-props-no-spreading */
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';
import DownloadModal from './DownloadModal';

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: theme.palette.primary,
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
			},
		},
	},
}));

const downloadFileTypeItems = [
	{ id: '243aab44-8d4a-11ec-b909-0242ac120002', value: 'pdf', label: 'PDF File', icon: PictureAsPdfOutlinedIcon },
	{ id: '29ac323c-8d4a-11ec-b909-0242ac120002', value: 'excel', label: 'EXCEL File', icon: ArticleOutlinedIcon },
];

const DownloadButtonOptions = ({ label = 'Download' }) => {
	// eslint-disable-next-line no-unused-vars
	const [selectedFileType, setSelectedFileType] = useState(null);
	const [showDownloadConfirmModal, setShowDownloadConfirmModal] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setSelectedFileType(null);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => setAnchorEl(null);

	const handleSelectFileType = (value) => () => {
		setSelectedFileType(value);
		setAnchorEl(null);
		setShowDownloadConfirmModal(true);
	};

	console.log(selectedFileType);

	return (
		<>
			<Box>
				<Button
					id="download-button-options"
					aria-controls={open ? 'download-options-button' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					variant="contained"
					color="secondary"
					sx={{ px: 2, py: 1.1, m: 1 }}
					disableElevation
					onClick={handleClick}
					endIcon={<KeyboardArrowDownIcon />}
					startIcon={<FileDownloadOutlinedIcon />}
				>
					{label}
				</Button>
				<StyledMenu
					id="download-options-button"
					MenuListProps={{ 'aria-labelledby': 'download-button-options' }}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					{downloadFileTypeItems?.map((item) => (
						<MenuItem key={item?.id} onClick={handleSelectFileType(item.value)} disableRipple>
							<item.icon />
							{item?.label}
						</MenuItem>
					))}
				</StyledMenu>
			</Box>

			{showDownloadConfirmModal && (
				<DownloadModal
					showModal={showDownloadConfirmModal}
					closeModal={setShowDownloadConfirmModal}
					title="Are you sure to download?"
					description="By clicking on confirm button all the files in this page will be download as selected format"
				/>
			)}
		</>
	);
};

export default DownloadButtonOptions;
