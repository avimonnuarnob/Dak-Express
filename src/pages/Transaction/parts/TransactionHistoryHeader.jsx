/* eslint-disable prettier/prettier */
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';
import SearchBar from '../../../components/atoms/SearchBar';
import DateRangeInputField from '../../../components/modecules/DateRangeInputField';
import DownloadButtonOptions from '../../../components/modecules/DownloadButton';

const TransactionHistoryHeader = () =>{
	const {t} = useTranslation();
	
	return (
	<>
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label={t('transaction-histories')} />

			<BackButton label={t('back-to-dashboard')} />
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
					startLabel={t('start-date')}
					endLabel={t('end-date')}
					name="date"
				/>
				<DownloadButtonOptions label={t('download')} />
			</Box>
		</Box>
	</>
)};

export default TransactionHistoryHeader;
