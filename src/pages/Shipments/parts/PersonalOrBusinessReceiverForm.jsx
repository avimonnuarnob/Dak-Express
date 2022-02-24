import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckboxInputField from '../../../components/modecules/CheckboxInputField';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import TextInputField from '../../../components/modecules/TextInputField';

const PersonalOrBusinessReceiverForm = () => {
	const { t } = useTranslation();
	const { values } = useFormikContext();

	const receiverSaveItems = [
		{ id: 'b4a1c022-87d8-11ec-a8a3-0242ac120002', value: false, label: t('save-receiver-location') },
	];

	return (
		<Grid container rowSpacing={3} columnSpacing={2}>
			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label={t('first-name')} name="receiver.firstName" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label={t('last-name')} name="receiver.lastName" />
			</Grid>

			{values?.receiver?.type === 'Business' && (
				<Grid item md={12} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('business-name')} name="receiver.businessName" />
				</Grid>
			)}

			<Grid item md={6} sm={6} xs={12}>
				<PhoneNumberInputField fullWidth isRequired label={t('phone')} name="receiver.phone" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label={t('district-state')} name="receiver.district" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label={t('city-town')} name="receiver.city" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label={t('post-code')} name="receiver.zipcode" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label={t('address')} name="receiver.address" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<CheckboxInputField name="receiver.save" items={receiverSaveItems} />
			</Grid>
		</Grid>
	);
};

export default PersonalOrBusinessReceiverForm;
