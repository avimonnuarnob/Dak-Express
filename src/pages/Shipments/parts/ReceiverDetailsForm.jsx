import { Box, Paper } from '@mui/material';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import RadioInputField from '../../../components/modecules/RadioInputField';
import PersonalOrBusinessReceiverForm from './PersonalOrBusinessReceiverForm';

const deliveryTypeSelectionItems = [
	{ id: '1f8cb0da-87cb-11ec-a8a3-0242ac120002', value: 'Personal', label: 'Personal' },
	{ id: '251277e2-87cb-11ec-a8a3-0242ac120002', value: 'Business', label: 'Business' },
];

const ReceiverDetailsForm = () => (
	<Paper sx={{ p: 4, m: 2 }} elevation={3}>
		<FormHeaderTitle formTitle="Receiver Details" />

		<Box pb={3}>
			<RadioInputField row name="receiver.type" label="Delivery Type : " items={deliveryTypeSelectionItems} />
		</Box>

		<PersonalOrBusinessReceiverForm />
	</Paper>
);

export default ReceiverDetailsForm;
