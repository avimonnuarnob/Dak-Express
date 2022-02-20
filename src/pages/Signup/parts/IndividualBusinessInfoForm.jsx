import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TextInputField from '../../../components/modecules/TextInputField';

const BusinessInfoFormIndividual = ({ isSubmitting = false }) => {
	const { t } = useTranslation();

	return (
		<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('sign-up-form-business-name')}
						name="businessName"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('sign-up-form-website-url')}
						name="website"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={4} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('sign-up-form-district')}
						name="districtOrState"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={4} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('sign-up-form-city')}
						name="cityOrTown"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={4} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('sign-up-form-post-code')}
						name="postcodeOrPostalcode"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('sign-up-form-address')}
						name="address"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default BusinessInfoFormIndividual;
