import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Typography } from '@mui/material';

const BackButton = () => (
	<Button
		sx={{
			ml: 'auto',
			display: 'flex',
			alignItems: 'center',
		}}
	>
		<ArrowBackIosNewIcon fontSize="small" />
		<Typography
			variant="body2"
			sx={{
				color: 'typography.main',
				ml: 1,
			}}
		>
			Back To Dashboard
		</Typography>
	</Button>
);

export default BackButton;
