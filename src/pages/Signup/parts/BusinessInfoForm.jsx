import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import TextInputField from '../../../components/modecules/TextInputField';

const BusinessInfoForm = ({ isSubmitting = false }) => {
	const { t } = useTranslation();
	const { setFieldValue } = useFormikContext();

	const handleChangeTradeLicenceFile = (event) => () => setFieldValue('tradeLicence', event.target.files[0]);

	return (
		<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('business-name')}
						name="businessName"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('website-url')}
						name="website"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<input accept="image/*" id="trade-licence-file" type="file" hidden />
					<FileUploadElement
						htmlFor="trade-licence-file"
						fullWidth
						type="file"
						label={t('trade-licence')}
						name="tradeLicence"
						defaultValue={null}
						boxStyles={{ paddingTop: '10px' }}
						onChange={handleChangeTradeLicenceFile}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('district')}
						name="district"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField fullWidth isRequired label={t('city')} name="city" boxStyles={{ paddingTop: '10px' }} />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('post-code')}
						name="zipcode"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<TextInputField fullWidth isRequired label={t('address')} name="address" boxStyles={{ paddingTop: '10px' }} />
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default BusinessInfoForm;
