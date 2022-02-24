import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { Alert, Box, IconButton, Snackbar } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CopyToClipboard = ({ copyText, children, disabled }) => {
	const [isCopied, setIsCopied] = useState(false);
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	// eslint-disable-next-line no-return-await
	const copyTextToClipboard = async (text) => await navigator.clipboard.writeText(text);

	const handleCopyClick = () => {
		copyTextToClipboard(copyText)
			.then(() => {
				setIsCopied(true);
				setOpen(true);
				setTimeout(() => {
					setIsCopied(false);
					setOpen(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			{children}
			<IconButton aria-label="copyToClipboard" size="small" onClick={handleCopyClick} disabled={disabled}>
				{isCopied ? <DoneOutlinedIcon fontSize="inherit" /> : <ContentCopyOutlinedIcon fontSize="inherit" />}
			</IconButton>

			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert onClose={handleClose} variant="filled" severity="success" color="secondary" sx={{ width: '100%' }}>
					Text copied successfully
				</Alert>
			</Snackbar>
		</Box>
	);
};

CopyToClipboard.propTypes = {
	copyText: PropTypes.string.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	children: PropTypes.elementType.isRequired,
	disabled: PropTypes.bool,
};

CopyToClipboard.defaultProps = {
	disabled: false,
};

export default CopyToClipboard;
