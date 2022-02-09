/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Paper } from '@mui/material';
import CheckboxInputField from '../../../components/modecules/CheckboxInputField';
import DateInputField from '../../../components/modecules/DateInputField';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import TextInputField from '../../../components/modecules/TextInputField';

const pickupSaveItems = [{ id: '3a272e4a-87d3-11ec-a8a3-0242ac120002', value: false, label: 'Save pickup location' }];

const PickupDetailsForm = () => (
	<Paper sx={{ p: 4, m: 2 }} elevation={3}>
		<FormHeaderTitle formTitle="Pickup Details" />

		<Grid container rowSpacing={3} columnSpacing={2}>
			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="First Name" name="pickup.firstName" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Last Name" name="pickup.lastName" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Business Name" name="pickup.businessName" />
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<PhoneNumberInputField fullWidth isRequired label="Phone" name="pickup.phone" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="District / State" name="pickup.district" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="City / Town" name="pickup.city" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Post Code / Postal Code" name="pickup.zipcode" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Address" name="pickup.address" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<DateInputField type="date" fullWidth label="Pickup Date" name="pickup.pickupDate" />
			</Grid>

			<Grid item md={6} sm={12} xs={12}>
				<DateInputField type="time" fullWidth label="Pickup Time" name="pickup.pickupTime" />
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<CheckboxInputField name="pickup.save" items={pickupSaveItems} />
			</Grid>
		</Grid>
	</Paper>
);

export default PickupDetailsForm;
