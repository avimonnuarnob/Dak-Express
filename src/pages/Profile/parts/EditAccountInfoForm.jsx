/* eslint-disable prettier/prettier */
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';

import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../components/modecules/SelectInputField';
import TextInputField from '../../../components/modecules/TextInputField';

const roleItems = [
	{ id: 1, label: 'Admin', value: 'admin' },
	{ id: 2, label: 'Super Admin', value: 'super admin' },
];

const EditAccountInfoForm = () => {
	const { isSubmitting } = useFormikContext();

	return (
		<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label="First Name"
						name="firstName"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label="Last Name"
						name="lastName"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<PhoneNumberInputField
						fullWidth
						isRequired
						label="Mobile Number"
						name="phone"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField fullWidth isRequired label="Email" name="email" />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<SelectInputField
						items={roleItems}
						fullWidth
						isRequired
						label="Role"
						name="role"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField fullWidth isRequired label="NID" name="NID" />
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default EditAccountInfoForm;
