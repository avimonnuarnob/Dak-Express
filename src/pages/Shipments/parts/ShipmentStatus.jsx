/* eslint-disable prettier/prettier */
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import {
	Box,
	Paper,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const steps = [
	{
		label: 'Confirmed',
		icon: <ConfirmationNumberOutlinedIcon />,
	},
	{
		label: 'Pickup',
		icon: <ShoppingCartCheckoutOutlinedIcon />,
	},
	{
		label: 'In Transit',
		icon: <TaskOutlinedIcon />,
	},
	{
		label: 'Out for Delivery',
		icon: <MopedOutlinedIcon />,
	},
	{
		label: 'Delivered',
		icon: <ViewInArOutlinedIcon />,
	},
];

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(2),
		margin: theme.spacing(3, 0, 0, 0),
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',

		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(5),
		},
	},
	root: {
		width: '90%',
	},
	button: {
		marginRight: theme.spacing.unit,
	},
	instructions: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit,
	},
	stepIconActive: {
		color: '#71911C !important',
		outline: `5px solid ${alpha('#95C11F', 0.2)}`,
		borderRadius: '50%',
	},
	stepIconCompleted: {
		color: `#71911C !important`,
	},
}));

const ShipmentStatus = () => {
	const classes = useStyles();

	return (
		<Paper className={classes.container}>
			<Typography variant="h5" fontWeight="600" mb={5}>
				Shipment #{' '}
				<Typography variant="span" sx={{ color: 'status.pending' }}>
					KLM7642138
				</Typography>
			</Typography>
			<Box sx={{ width: '100%', overflowX: 'scroll', p: 7 }}>
				<Stepper activeStep={3} alternativeLabel>
					{steps.map((step) => (
						<Step
							key={step.label}
							sx={{
								position: 'relative',
							}}
						>
							<StepLabel
								StepIconProps={{
									classes: {
										active: classes.stepIconActive,
										completed: classes.stepIconCompleted,
									},
								}}
							>
								{step.label}
							</StepLabel>
							<Box
								sx={{
									position: 'absolute',
									bottom: 'calc(100% + 20px)',
									left: '50%',
									transform: 'translateX(-50%)',
								}}
							>
								{step.icon}
							</Box>
						</Step>
					))}
				</Stepper>
			</Box>
		</Paper>
	);
};

export default ShipmentStatus;
