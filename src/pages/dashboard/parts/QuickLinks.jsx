/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Button, Grid, Typography } from '@mui/material';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

const QuickLinks = () => {
	return (
		<Box
			sx={{
				mt: 3,
				color: (theme) => theme.palette.typography.main,
			}}
		>
			<Typography sx={{ typography: { sm: 'h5', xs: 'h6' }, fontWeight: '600 !important' }}>
				Quick Links
			</Typography>
			<Box
				sx={{
					mt: 3,
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={6} sm={6} md={3}>
						<Button
							fullWidth
							variant="contained"
							color="inherit"
							sx={{
								cursor: 'pointer',
								bgcolor: (theme) => theme.palette.primary.white,
								borderRadius: 2,
								boxShadow: 4,
								textTransform: 'none',
							}}
						>
							<Box
								sx={{
									textAlign: 'center',
									p: 1,
								}}
							>
								<Box
									sx={{
										width: '3.75rem',
										aspectRatio: '1/1',
										p: 1,
										borderRadius: '50%',
										background: '#82A52B33',

										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										margin: 'auto',
									}}
								>
									<AddToPhotosOutlinedIcon
										sx={{
											color: (theme) => theme.palette.secondary.main,
										}}
									/>
								</Box>
								<Typography sx={{ my: 2, fontWeight: '600 !important' }}>
									Create A Shipment
								</Typography>
							</Box>
						</Button>
					</Grid>

					<Grid item xs={6} sm={6} md={3}>
						<Button
							fullWidth
							variant="contained"
							color="inherit"
							sx={{
								cursor: 'pointer',
								bgcolor: (theme) => theme.palette.primary.white,
								borderRadius: 2,
								boxShadow: 4,
								textTransform: 'none',
							}}
						>
							<Box
								sx={{
									textAlign: 'center',
									p: 1,
								}}
							>
								<Box
									sx={{
										width: '3.75rem',
										aspectRatio: '1/1',
										p: 1,
										borderRadius: '50%',
										background: '#ECFBE6',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										margin: 'auto',
									}}
								>
									<HistoryOutlinedIcon
										sx={{
											color: (theme) => theme.palette.status.success,
										}}
									/>
								</Box>
								<Typography sx={{ my: 2, fontWeight: '600 !important' }}>
									Transaction History
								</Typography>
							</Box>
						</Button>
					</Grid>

					<Grid item xs={6} sm={6} md={3}>
						<Button
							fullWidth
							variant="contained"
							color="inherit"
							sx={{
								cursor: 'pointer',
								bgcolor: (theme) => theme.palette.primary.white,
								borderRadius: 2,
								boxShadow: 4,
								textTransform: 'none',
							}}
						>
							<Box
								sx={{
									textAlign: 'center',
									p: 1,
								}}
							>
								<Box
									sx={{
										width: '3.75rem',
										aspectRatio: '1/1',
										p: 1,
										borderRadius: '50%',
										background: '#FFF6E9',

										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										margin: 'auto',
									}}
								>
									<AddLocationOutlinedIcon
										sx={{
											color: (theme) => theme.palette.status.pending,
										}}
									/>
								</Box>
								<Typography sx={{ my: 2, fontWeight: '600 !important' }}>Location</Typography>
							</Box>
						</Button>
					</Grid>

					<Grid item xs={6} sm={6} md={3}>
						<Button
							fullWidth
							variant="contained"
							color="inherit"
							sx={{
								cursor: 'pointer',
								bgcolor: (theme) => theme.palette.primary.white,
								borderRadius: 2,
								boxShadow: 4,
								textTransform: 'none',
							}}
						>
							<Box
								elevation={5}
								sx={{
									textAlign: 'center',
									p: 1,
								}}
							>
								<Box
									sx={{
										width: '3.75rem',
										aspectRatio: '1/1',
										p: 1,
										borderRadius: '50%',
										background: '#E306131A',

										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										margin: 'auto',
									}}
								>
									<QuizOutlinedIcon
										sx={{
											color: (theme) => theme.palette.status.failed,
										}}
									/>
								</Box>
								<Typography sx={{ my: 2, fontWeight: '600 !important' }}>Support</Typography>
							</Box>
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default QuickLinks;
