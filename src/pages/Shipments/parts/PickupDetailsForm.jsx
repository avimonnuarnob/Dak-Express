/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckboxInputField from '../../../components/modecules/CheckboxInputField';
import DateInputField from '../../../components/modecules/DateInputField';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import TextInputField from '../../../components/modecules/TextInputField';

const PickupDetailsForm = () => {
	const { t } = useTranslation();

	const pickupSaveItems = [
		{ id: '3a272e4a-87d3-11ec-a8a3-0242ac120002', value: false, label: t('save-pickup-location') },
	];

	return (
		<Paper sx={{ p: 4, my: 2 }} elevation={3}>
			<FormHeaderTitle formTitle={t('pickup-details')} />

			<Grid container rowSpacing={3} columnSpacing={2}>
				<Grid item md={6} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('first-name')} name="pickup.firstName" />
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('last-name')} name="pickup.lastName" />
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('business-name')} name="pickup.businessName" />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<PhoneNumberInputField fullWidth isRequired label={t('phone')} name="pickup.phone" />
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('district-state')} name="pickup.district" />
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('city-town')} name="pickup.city" />
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('post-code')} name="pickup.zipcode" />
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('address')} name="pickup.address" />
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<DateInputField type="date" fullWidth label={t('pickup-date')} name="pickup.pickupDate" />
				</Grid>

				<Grid item md={6} sm={12} xs={12}>
					<DateInputField type="time" fullWidth label={t('pickup-time')} name="pickup.pickupTime" />
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<CheckboxInputField name="pickup.save" items={pickupSaveItems} />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default PickupDetailsForm;
