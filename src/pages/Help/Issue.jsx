import { Box } from '@mui/material';
import IssueDetailsBody from './parts/IssueDetailsBody';
import IssueDetailsHeader from './parts/IssueDetailsHeader';

const FAKE__DATA = {
	S_id: 'KLM7642138',
	FullName: 'Md Rafez Hossain',
	phone: '+880 1324 249011',
	email: 'rafez.hossain@cityscapeglobal.net',
	subject: 'Issue subject here',
	message:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry/'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
	date: '12 Dec 2021',
};

const Issue = () => (
	<Box sx={{ py: 2, px: 3 }}>
		<IssueDetailsHeader />
		<IssueDetailsBody data={FAKE__DATA} />
	</Box>
);

export default Issue;
