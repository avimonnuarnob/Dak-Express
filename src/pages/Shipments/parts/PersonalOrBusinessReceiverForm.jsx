import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import CheckboxInputField from '../../../components/modecules/CheckboxInputField';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import TextInputField from '../../../components/modecules/TextInputField';

const receiverSaveItems = [
	{ id: 'b4a1c022-87d8-11ec-a8a3-0242ac120002', value: false, label: 'Save receiver location' },
];

const PersonalOrBusinessReceiverForm = () => {
	const { values } = useFormikContext();

	return (
		<Grid container rowSpacing={3} columnSpacing={2}>
			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Receiver First Name" name="receiver.firstName" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Receiver Last Name" name="receiver.lastName" />
			</Grid>

			{values?.receiver?.type === 'Business' && (
				<Grid item md={12} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label="Business Name" name="receiver.businessName" />
				</Grid>
			)}

			<Grid item md={6} sm={6} xs={12}>
				<PhoneNumberInputField fullWidth isRequired label="Phone" name="receiver.phone" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="District / State" name="receiver.district" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="City / Town" name="receiver.city" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Post Code / Postal Code" name="receiver.zipcode" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Address" name="receiver.address" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<CheckboxInputField name="receiver.save" items={receiverSaveItems} />
			</Grid>
		</Grid>
	);
};

export default PersonalOrBusinessReceiverForm;
