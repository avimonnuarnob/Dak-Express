import { Grid } from '@mui/material';
import TextInputField from '../../../components/modecules/TextInputField';

const BusinessInfoFormIndividual = ({ isSubmitting = false }) => (
	<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
		<Grid container spacing={2}>
			<Grid item md={6} sm={6} xs={12}>
				<TextInputField
					fullWidth
					isRequired
					label="Business Name"
					name="businessName"
					boxStyles={{ paddingTop: '10px' }}
				/>
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<TextInputField
					fullWidth
					isRequired
					label="Website or Social URL"
					name="website"
					boxStyles={{ paddingTop: '10px' }}
				/>
			</Grid>

			<Grid item md={4} sm={6} xs={12}>
				<TextInputField
					fullWidth
					isRequired
					label="District / State"
					name="districtOrState"
					boxStyles={{ paddingTop: '10px' }}
				/>
			</Grid>

			<Grid item md={4} sm={6} xs={12}>
				<TextInputField fullWidth isRequired label="City / Town" name="cityOrTown" boxStyles={{ paddingTop: '10px' }} />
			</Grid>

			<Grid item md={4} sm={6} xs={12}>
				<TextInputField
					fullWidth
					isRequired
					label="Post Code / Postal Code"
					name="postcodeOrPostalcode"
					boxStyles={{ paddingTop: '10px' }}
				/>
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<TextInputField fullWidth isRequired label="Address" name="address" boxStyles={{ paddingTop: '10px' }} />
			</Grid>
		</Grid>
	</fieldset>
);

export default BusinessInfoFormIndividual;
