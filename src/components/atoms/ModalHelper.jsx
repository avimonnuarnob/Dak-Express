import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	borderRadius: '10px',
	boxShadow: 20,
	p: 5,
	width: 500,
};

const ModalHelper = ({ showModal = false, closeModal = null, children = null }) => {
	const handleClose = () => closeModal(!showModal);

	return (
		<div>
			<Modal
				open={showModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>{children}</Box>
			</Modal>
		</div>
	);
};

export default ModalHelper;
