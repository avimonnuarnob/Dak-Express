/* eslint-disable arrow-body-style */
import { Box, Typography } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';
import CopyToClipboard from '../../../components/modecules/CopyToClipboard';

const IssueDetailsHeader = () => {
	return (
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
				gap: 1,
			}}
		>
			<Typography variant="h4" fontWeight="bold" color="primary">
				Issue ID:
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
