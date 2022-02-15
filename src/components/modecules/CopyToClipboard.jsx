/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable no-return-await */
/* eslint-disable no-else-return */
import PropTypes from 'prop-types';
import { Alert, Box, IconButton, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const CopyToClipboard = ({ copyText, children, disabled }) => {
	const [isCopied, setIsCopied] = useState(false);
	const [open, setOpen] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const copyTextToClipboard = async (text) =>
		await navigator.clipboard.writeText(text);

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
		<>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				{children}
				<IconButton
					aria-label="copyToClipboard"
					size="small"
					onClick={handleCopyClick}
					disabled={disabled}
				>
					{isCopied ? (
						<DoneOutlinedIcon fontSize="inherit" />
					) : (
						<ContentCopyOutlinedIcon fontSize="inherit" />
					)}
				</IconButton>
			</Box>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={handleClose}
					variant="filled"
					severity="success"
					color="secondary"
					sx={{ width: '100%' }}
				>
					Text copied successfully
				</Alert>
			</Snackbar>
		</>
	);
};

CopyToClipboard.propTypes = {
	copyText: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
	disabled: PropTypes.bool,
};

CopyToClipboard.defaultProps = {
	disabled: false,
};

export default CopyToClipboard;
