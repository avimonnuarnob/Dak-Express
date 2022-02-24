import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FileUploadElement from '../../../components/modecules/FileUploadElement';
import TextInputField from '../../../components/modecules/TextInputField';

const BusinessInfoForm = ({ isSubmitting = false }) => {
	const { t } = useTranslation();

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
					<FileUploadElement
						fullWidth
						isRequired
						type="file"
						label={t('trade-licence')}
						name="tradeLicence"
						defaultValue={null}
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('district')}
						name="districtOrState"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField fullWidth isRequired label={t('city')} name="cityOrTown" boxStyles={{ paddingTop: '10px' }} />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('post-code')}
						name="postcodeOrPostalcode"
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
