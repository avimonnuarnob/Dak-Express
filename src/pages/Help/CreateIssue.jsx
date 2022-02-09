import { Box } from '@mui/material';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import CreateIssueForm from './parts/CreateIssueForm';

const CreateIssue = () => (
	<Box sx={{ py: 2, px: 3 }}>
		<Box
			sx={{
				display: { xs: 'block', sm: 'flex' },
				alignItems: 'center',
			}}
		>
			<HeaderTitle label="Get Support" />
			<BackButton />
		</Box>
		<CreateIssueForm />
	</Box>
);

export default CreateIssue;
