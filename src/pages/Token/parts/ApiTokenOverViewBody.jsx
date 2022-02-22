/* eslint-disable prettier/prettier */
// import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import {
	Box,
	// Button,
	Chip,
	// FormControlLabel,
	Paper,
	Switch,
	Typography
} from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ApiTokenOverviewCard from './ApiTokenOverviewCard';

const useStyles = makeStyles((theme) => ({
	box: {
		padding: theme.spacing(3, 3),
		margin: theme.spacing(3, 0, 0, 0),
	},
	box__header: {
		display: 'flex',
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
		margin: theme.spacing(0, 0, 3, 0),

		'& h5': {
			color: theme.palette.status.pending,
			margin: theme.spacing(0, 0, 3, 0),
		},
	},
	box__header__chip: {
		color: `${theme.palette.primary.white} !important`,
		padding: `${theme.spacing(0, 5)} !important`,
		fontWeight: '600',
	},
	'box__header__chip--active': {
		backgroundColor: `${theme.palette.status.success} !important`,
	},
	'box__header__chip--deactive': {
		backgroundColor: `${theme.palette.status.failed} !important`,
	},
	box__header__button: {
		marginRight: '15px !important',
		padding: `${theme.spacing(0.5, 2)} !important`,
		color: `${theme.palette.status.pending} !important`,
		borderColor: `${theme.palette.status.pending} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
	},
}));

const StyledSwitch = styled(Switch)(({ theme }) => ({
	'& .MuiSwitch-switchBase.Mui-checked': {
		color: theme.palette.status.success,
	},
	'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		backgroundColor: theme.palette.status.success,
	},
}));

const ApiTokenOverViewBody = () => {
	const {t} = useTranslation();
	const classes = useStyles();

	const [checked, setChecked] = useState(true);

	const handleChange = () => {
		setChecked((c) => !c);
	};
	return (
		<Paper className={classes.box}>
			<Box className={classes.box__header}>
				<Typography variant="h5" fontWeight="bold">
					{t('api-tokens-header')}
				</Typography>
				<Box sx={{ ml: 'auto' }}>
					<StyledSwitch
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<Chip
						label={checked ? 'Active' : 'Deactive'}
						className={[
							classes.box__header__chip,
							`${
								checked
									? classes['box__header__chip--active']
									: classes['box__header__chip--deactive']
							}`,
						].join(' ')}
					/>
				</Box>
			</Box>
			<ApiTokenOverviewCard checked={checked} />
		</Paper>
	);
};

export default ApiTokenOverViewBody;
