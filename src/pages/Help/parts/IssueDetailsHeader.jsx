/* eslint-disable arrow-body-style */
import { Box } from '@mui/material';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';

const IssueDetailsHeader = () => {
	return (
		<Box
			sx={{
				display: {
					xs: 'block',
					sm: 'flex',
				},
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="ISSUE ID: IS74849F" />
			<BackButton />
		</Box>
	);
};

export default IssueDetailsHeader;
