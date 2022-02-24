import { Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import RadioInputField from '../../../components/modecules/RadioInputField';
import PersonalOrBusinessReceiverForm from './PersonalOrBusinessReceiverForm';

const ReceiverDetailsForm = () => {
	const { t } = useTranslation();

	const deliveryTypeSelectionItems = [
		{ id: '1f8cb0da-87cb-11ec-a8a3-0242ac120002', value: 'Personal', label: t('personal') },
		{ id: '251277e2-87cb-11ec-a8a3-0242ac120002', value: 'Business', label: t('business') },
	];

	return (
		<Paper sx={{ p: 4, my: 2 }} elevation={3}>
			<FormHeaderTitle formTitle={t('receiver-details')} />

			<Box pb={3}>
				<RadioInputField row name="receiver.type" label={t('delivery-type')} items={deliveryTypeSelectionItems} />
			</Box>

			<PersonalOrBusinessReceiverForm />
		</Paper>
	);
};

export default ReceiverDetailsForm;
