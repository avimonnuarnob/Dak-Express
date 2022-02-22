/* eslint-disable arrow-body-style */
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../components/atoms/BackButton';
import CopyToClipboard from '../../../components/modecules/CopyToClipboard';

const IssueDetailsHeader = () => {
	const { t } = useTranslation();
	return (
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
				gap: 1,
			}}
		>
			<Typography variant="h4" fontWeight="bold" color="primary">
				{t('issue-id')}:
			</Typography>
			<CopyToClipboard copyText="IS74849F">
				<Typography variant="h4" fontWeight="bold" color="secondary">
					IS74849F
				</Typography>
			</CopyToClipboard>

			<BackButton redirectTo="/supports" label="Back to Supports" />
		</Box>
	);
};

export default IssueDetailsHeader;
