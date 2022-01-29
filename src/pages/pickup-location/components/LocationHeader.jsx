/* eslint-disable arrow-body-style */
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const LocationHeader = () => {
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
				Pickup Location
			</Typography>
			<Button
				variant="outlined"
				sx={{
					bgcolor: 'primary.white',
					borderColor: 'typography.sec',
					px: 2,
					py: 1,
					ml: 2,
				}}
			>
				<AddIcon
					sx={{
						// fontSize: '1px',
						color: 'typography.sec',
					}}
				/>
				<Typography
					fontSize="10px"
					letterSpacing={1}
					sx={{
						fontWeight: 'bold',
						ml: 1,
						color: 'typography.sec',
					}}
				>
					ADD NEW LOCATION
				</Typography>
			</Button>
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

export default LocationHeader;
