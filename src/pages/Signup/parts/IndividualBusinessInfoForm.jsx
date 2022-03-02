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

				<Grid item md={4} sm={4} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={t('district')}
						name="district"
						boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={4} sm={4} xs={12}>
					<TextInputField fullWidth isRequired label={t('city')} name="city" boxStyles={{ paddingTop: '10px' }} />
				</Grid>

				<Grid item md={4} sm={4} xs={12}>
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

export default BusinessInfoFormIndividual;
