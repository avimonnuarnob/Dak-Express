import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import MopedOutlinedIcon from '@mui/icons-material/MopedOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { Box, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const steps = [
	{
		label: 'Confirmed',
		icon: <ConfirmationNumberOutlinedIcon fontSize="large" />,
	},
	{
		label: 'Pickup',
		icon: <ShoppingCartCheckoutOutlinedIcon fontSize="large" />,
	},
	{
		label: 'In Transit',
		icon: <TaskOutlinedIcon fontSize="large" />,
	},
	{
		label: 'Out for Delivery',
		icon: <MopedOutlinedIcon fontSize="large" />,
	},
	{
		label: 'Delivered',
		icon: <ViewInArOutlinedIcon fontSize="large" />,
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
		outline: `0.5rem solid ${alpha('#95C11F', 0.2)}`,
		borderRadius: '50%',
	},
	stepIconCompleted: {
		color: `#71911C !important`,
	},
}));

const ShipmentStatus = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	const [activeStep, setActiveStep] = useState(0);

	useEffect(() => {
		setActiveStep(['confirmed', 'pickup', 'inTransit', 'outForDelivery', 'delivered'].indexOf('outForDelivery'));
	}, []);

	return (
		<Paper className={classes.container}>
			<Typography variant="h5" fontWeight="600" mb={5}>
				{t('shipments')} #{' '}
				<Typography variant="span" sx={{ color: 'status.pending' }}>
					KLM7642138
				</Typography>
			</Typography>
			<Box sx={{ width: '100%', overflowX: 'scroll', p: 7 }}>
				<Stepper activeStep={activeStep + 1} alternativeLabel>
					{steps.map((step, index) => (
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
									color: index <= activeStep ? 'secondary.main' : 'gray',
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
