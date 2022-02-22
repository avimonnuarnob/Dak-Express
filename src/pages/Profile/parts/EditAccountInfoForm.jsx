/* eslint-disable prettier/prettier */
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import PhoneNumberInputField from '../../../components/modecules/PhoneNumberInputField';
import SelectInputField from '../../../components/modecules/SelectInputField';
import TextInputField from '../../../components/modecules/TextInputField';


const roleItems = [
	{ id: 1, label: 'Admin', value: 'admin' },
	{ id: 2, label: 'Super Admin', value: 'super admin' },
];

const EditAccountInfoForm = () => {
	const { isSubmitting } = useFormikContext();
	const { t } = useTranslation();

	return (
		<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('first-name')}
						name="firstName"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('last-name')}
						name="lastName"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<PhoneNumberInputField
						fullWidth
						isRequired
						label={t('mobile-number')}
						name="phone"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField fullWidth isRequired label={t('email')} name="email" />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<SelectInputField
						items={roleItems}
						fullWidth
						isRequired
						label={t('role')}
						name="role"
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField fullWidth isRequired label={t('NID')} name="NID" />
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default EditAccountInfoForm;
