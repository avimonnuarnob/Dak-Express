/* eslint-disable prettier/prettier */
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BackButton from '../../../components/atoms/BackButton';
import SearchBar from '../../../components/atoms/SearchBar';
import DateInput from '../../../components/modecules/DateInput';

const useStyles = makeStyles((theme) => ({
	button: {},
	button__download: {
		color: `${theme.palette.primary.white} !important`,
		borderColor: `${theme.palette.secondary.main} !important`,
		backgroundColor: `${theme.palette.secondary.main} !important`,
		'&:hover': {
			borderColor: `${theme.palette.status.pending} !important`,
		},
		padding: '0 20px !important',
	},
}));

const TransactionHistoryHeader = () => {
	const classes = useStyles();
	return (
		<>
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
					Transaction History
				</Typography>

				<BackButton />
			</Box>
			<Box
				sx={{
					mt: 3,
					display: 'flex',
					flexDirection: {
						xs: 'column',
						sm: 'row',
					},
				}}
			>
				<Box
					sx={{
						width: {
							sm: '250px',
						},
					}}
				>
					<SearchBar />
				</Box>
				<Box
					sx={{
						ml: {
							xs: 0,
							sm: 'auto',
						},
						display: 'flex',
						gap: 2,
					}}
				>
					<DateInput fullWidth label="Date" name="date" />
					<Button
						size="small"
						variant="contained"
						className={classes.button__download}
						startIcon={<DownloadIcon />}
					>
						Download
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default TransactionHistoryHeader;
