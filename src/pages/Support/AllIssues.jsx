import { Box } from '@mui/material';
import AllIssuesHeader from './parts/AllIssuesHeader';
import IssuesTable from './parts/IssuesTable';

const AllIssues = () => (
	<Box sx={{ py: 2, px: 3 }}>
		<AllIssuesHeader />

		<Box sx={{ mt: 5, borderRadius: 3 }}>
			<IssuesTable />
		</Box>
	</Box>
);

export default AllIssues;
