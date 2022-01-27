/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Box, Paper, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',

		padding: '2rem 1.5rem',
		gap: '1.5rem',
		justifyContent: 'space-between',
		borderRadius: '0 !important',
		backgroundColor: theme.palette.primary.white,
	},
}));

const ShipmentCardStyled = styled('div')((props) => ({
	display: 'grid',
	gridTemplateColumns: '1fr auto',

	flex: 1,

	boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
	gap: 8,
	alignItems: 'center',
	color: props.theme.palette.typography.main,
	padding: '2rem 1.75rem',
	borderRadius: 6,
	backgroundColor: props.backgroundColor,
}));

const StatIcon = ({ backgroundColor, Icon, iconColor }) => {
	return (
		<Box
			sx={{
				width: '4rem',
				aspectRatio: '1',
				p: 1,
				borderRadius: '50%',
				background: backgroundColor,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				justifySelf: 'center',
			}}
		>
			<Icon
				sx={{
					color: iconColor,
				}}
			/>
		</Box>
	);
};

const ShipmentStat = () => {
	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.container}>
			<ShipmentCardStyled backgroundColor="#EFF5DE">
				<div>
					<Typography
						variant="h6"
						fontWeight={600}
						sx={{
							py: 1,
						}}
					>
						Complete Shipment
					</Typography>
					<Typography variant="h4" fontWeight={600}>
						95
					</Typography>
				</div>
				<StatIcon
					Icon={ListAltOutlinedIcon}
					backgroundColor="linear-gradient(135deg, rgba(104, 129, 40, 0) 0%, rgba(104, 129, 40, 0.64) 97.35%)"
					iconColor="#64753A"
				/>
			</ShipmentCardStyled>

			<ShipmentCardStyled backgroundColor="#FDF9F2">
				<div>
					<Typography
						variant="h6"
						fontWeight={600}
						sx={{
							py: 1,
						}}
					>
						Shipments in transit
					</Typography>
					<Typography variant="h4" fontWeight={600}>
						12
					</Typography>
				</div>
				<StatIcon
					Icon={ListAltOutlinedIcon}
					backgroundColor="linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 97.35%)"
					iconColor="#D29507"
				/>
			</ShipmentCardStyled>

			<ShipmentCardStyled backgroundColor="#FEF4F4">
				<div>
					<Typography
						variant="h6"
						fontWeight={600}
						sx={{
							py: 1,
						}}
					>
						Failed Shipment
					</Typography>
					<Typography variant="h4" fontWeight={600}>
						05
					</Typography>
				</div>
				<StatIcon
					Icon={PriorityHighIcon}
					backgroundColor="linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 97.35%)"
					iconColor="#FF333F"
				/>
			</ShipmentCardStyled>
		</Paper>
	);
};

StatIcon.propTypes = {
	Icon: PropTypes.element.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	iconColor: PropTypes.string.isRequired,
};

export default ShipmentStat;
