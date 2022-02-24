import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SearchBar from '../../../components/atoms/SearchBar';
import DateRangeInputField from '../../../components/modecules/DateRangeInputField';
import DownloadButtonOptions from '../../../components/modecules/DownloadButton';
import PageTitlebar from '../../../components/modecules/PageTitlebar';

const TransactionHistoryHeader = () => {
	const { t } = useTranslation();

	return (
		<>
			<PageTitlebar title={t('transaction-histories')} page={t('back-to-dashboard')} />

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
					<DateRangeInputField fullWidth startLabel={t('start-date')} endLabel={t('end-date')} name="date" />
					<DownloadButtonOptions label={t('download')} />
				</Box>
			</Box>
		</>
	);
};

export default TransactionHistoryHeader;
