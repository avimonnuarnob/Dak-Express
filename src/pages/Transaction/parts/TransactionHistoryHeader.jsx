/* eslint-disable prettier/prettier */
import { Box } from '@mui/material';
import DateRangeInputField from '../../../components/modecules/DateRangeInputField';
import DownloadButtonOptions from '../../../components/modecules/DownloadButton';
import BackButton from '../../../components/atoms/BackButton';
import SearchBar from '../../../components/atoms/SearchBar';
import HeaderTitle from '../../../components/atoms/HeaderTitle';

const TransactionHistoryHeader = () => (
	<>
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="Transaction History" />

			<BackButton />
		</Box>

		<Box
			sx={{
				mt: 3,
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
			}}
		>
			<Box sx={{ width: { sm: '250px' } }}>
				<SearchBar />
			</Box>
			<Box
				sx={{
					ml: { xs: 0, sm: 'auto' },
					display: 'flex',
					gap: 2,
				}}
			>
				<DateRangeInputField
					fullWidth
					startLabel="Start Date"
					endLabel="End Date"
					name="date"
				/>
				<DownloadButtonOptions label="Download" />
			</Box>
		</Box>
	</>
);

export default TransactionHistoryHeader;
