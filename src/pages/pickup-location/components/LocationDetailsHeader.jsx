/* eslint-disable arrow-body-style */
import { Box, Button, Chip, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const LocationDetailsHeader = () => {
	return (
		<Box
			sx={{
				display: {
					xs: 'block',
					sm: 'flex',
				},
				alignItems: 'center',
			}}
		>
			<Typography
				variant="h4"
				fontWeight="bold"
				sx={{
					color: 'typography.main',
				}}
			>
				Location
			</Typography>
			<Chip
				label="PICKUP LOCATION"
				sx={{
					ml: 2,
					fontSize: '10px',
					color: 'primary.white',
					bgcolor: 'secondary.main',
				}}
			/>
			<Button
				sx={{
					ml: 'auto',

					display: 'flex',
					alignItems: 'center',
				}}
			>
				<ArrowBackIosNewIcon />
				<Typography
					sx={{
						color: 'typography.main',
						ml: 1,
					}}
				>
					Back To Dashboard
				</Typography>
			</Button>
		</Box>
	);
};

export default LocationDetailsHeader;
