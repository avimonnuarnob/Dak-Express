import { Box, Button, CircularProgress, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useReducer, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { initialState, loadingReducer, startLoading, stopLoading } from '../../../reducers/LoadingReducer';
import { sleep } from '../../../utils/functions';

const useStyles = makeStyles((theme) => ({
	radioFlexRow: {
		display: 'flex',
		flexDirection: 'row !important',
		gap: '0',
	},

	preview: {},
	preview__back__button: {
		color: `${theme.palette.secondary.main} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		height: '55px',
		margin: '10px 0 !important',
		padding: '0 3rem !important',
	},
	preview__button: {
		background: `${theme.palette.secondary.main} !important`,
		height: '55px',
		padding: '0 7rem !important',
		margin: '10px 0 !important',
		'&:disabled': {
			opacity: '0.7 !important',
			color: 'white !important',
		},
	},
	preview__actions: {
		marginTop: '10px !important',
		display: 'flex',
		gap: '15px',
	},
}));

const WhoWillPay = ({ edit }) => {
	const [selection, setSelection] = useState('');
	const [loading, dispatch] = useReducer(loadingReducer, initialState);
	const { t } = useTranslation();

	const classes = useStyles();
	const redirectTo = useNavigate();
	const navigate = useNavigate();

	const updateSelection = (event, value) => {
		console.log(value);
		setSelection(value);
	};

	const onSubmitHandler = async () => {
		const shipmentData = JSON.parse(localStorage.getItem('previewShipmentData'));
		shipmentData.paidBy = selection;

		console.log({ shipmentData });
		dispatch(startLoading());
		await sleep(2000);
		dispatch(stopLoading());
		localStorage.removeItem('previewShipmentData');
		sessionStorage.removeItem('previewShipmentData');
		redirectTo('/shipments');
	};

	return (
		<Box>
			<Paper sx={{ p: 4, mt: 3, display: 'flex', justifyContent: 'space-between' }}>
				<Typography
					fontSize="24px"
					fontWeight="bold"
					sx={{
						color: 'status.pending',
					}}
				>
					{t('who-will-pay')}
				</Typography>
				{!edit ? (
					<Typography fontSize="24px" fontWeight="bold" sx={{ color: 'typography.sec' }}>
						{t('sender')}
					</Typography>
				) : (
					<RadioGroup name="value" value={selection.value} onChange={updateSelection} className={classes.radioFlexRow}>
						<FormControlLabel
							label={
								<Typography variant="h5" fontWeight="600" color={selection === 'sender' ? 'secondary' : 'primary'}>
									{t('sender')}
								</Typography>
							}
							value="sender"
							control={<Radio color="secondary" />}
						/>

						<FormControlLabel
							label={
								<Typography variant="h5" fontWeight="600" color={selection === 'receiver' ? 'secondary' : 'primary'}>
									{t('receiver')}
								</Typography>
							}
							value="receiver"
							sx={{ fontWeight: '600' }}
							control={<Radio color="secondary" />}
						/>
					</RadioGroup>
				)}
			</Paper>
			{edit && (
				<div className={classes.preview__actions}>
					<Button
						type="button"
						variant="outlined"
						onClick={() => navigate(-1)}
						sx={{ ml: 'auto !important' }}
						className={classes.preview__back__button}
					>
						{t('cancel')}
					</Button>

					<Button
						disabled={!selection.length}
						type="submit"
						onClick={onSubmitHandler}
						variant="contained"
						endIcon={loading && <CircularProgress size={20} color="inherit" />}
						className={classes.preview__button}
					>
						{loading ? t('submitting') : t('submit')}
					</Button>
				</div>
			)}
		</Box>
	);
};

export default WhoWillPay;
