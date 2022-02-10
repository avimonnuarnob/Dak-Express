/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
	FormControlLabel,
	Paper,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const data = [
	{
		id: '1',
		value: 'sender',
	},
	{
		id: '2',
		value: 'receiver',
	},
];

const useStyles = makeStyles((theme) => ({
	radioFlexRow: {
		display: 'flex',
		flexDirection: 'row !important',
		gap: '0',
	},
}));

const WhoWillPay = ({ edit }) => {
	const [selection, setSelection] = useState('');
	const classes = useStyles();

	const updateSelection = (event, value) => {
		console.log(value);
		setSelection(value);
	};

	return (
		<Paper
			sx={{
				p: 4,
				mt: 3,
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Typography
				fontSize="24px"
				fontWeight="bold"
				sx={{
					color: 'status.pending',
				}}
			>
				Who Will Pay
			</Typography>
			{!edit ? (
				<Typography
					fontSize="24px"
					fontWeight="bold"
					sx={{
						color: 'typography.sec',
					}}
				>
					Sender
				</Typography>
			) : (
				<RadioGroup
					name="value"
					value={selection.value}
					onChange={updateSelection}
					className={classes.radioFlexRow}
				>
					<FormControlLabel
						label={
							<Typography
								variant="h5"
								fontWeight="600"
								color={selection === 'sender' ? 'secondary' : 'primary'}
							>
								Sender
							</Typography>
						}
						value="sender"
						control={<Radio color="secondary" />}
					/>
					<FormControlLabel
						label={
							<Typography
								variant="h5"
								fontWeight="600"
								color={selection === 'receiver' ? 'secondary' : 'primary'}
							>
								Receiver
							</Typography>
						}
						value="receiver"
						sx={{ fontWeight: '600' }}
						control={<Radio color="secondary" />}
					/>
				</RadioGroup>
			)}
		</Paper>
	);
};

export default WhoWillPay;
