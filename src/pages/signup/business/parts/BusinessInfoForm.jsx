import { Grid } from '@mui/material';
import FileUploadElement from '../../../../components/modecules/FileUploadElement';
import InputElement from '../../../../components/modecules/InputElement';

const BusinessInfoForm = ({
	isSubmitting = false,
	values = {},
	errors = {},
	handleChange = null,
	handleBlur = null,
	touched = {},
	// setFieldValue = null,
}) => (
	<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
		<Grid container spacing={2}>
			<Grid item md={6} sm={6} xs={12}>
				<InputElement
					fullWidth
					isRequired
					label="Business Name"
					name="businessName"
					boxStyles={{ paddingTop: '10px' }}
					value={values.businessName}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.businessName && Boolean(errors.businessName)}
					helperText={touched.businessName && errors.businessName}
				/>
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<InputElement
					fullWidth
					isRequired
					label="Website or Social URL"
					name="website"
					boxStyles={{ paddingTop: '10px' }}
					value={values.website}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.website && Boolean(errors.website)}
					helperText={touched.website && errors.website}
				/>
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<FileUploadElement
					fullWidth
					isRequired
					type="file"
					label="Trade Licence"
					name="tradeLicence"
					defaultValue={null}
					boxStyles={{ paddingTop: '10px' }}
					value={values.tradeLicence}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.tradeLicence && Boolean(errors.tradeLicence)}
					helperText={touched.tradeLicence && errors.tradeLicence}
				/>
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<InputElement
					fullWidth
					isRequired
					label="District / State"
					name="districtOrState"
					boxStyles={{ paddingTop: '10px' }}
					value={values.districtOrState}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.districtOrState && Boolean(errors.districtOrState)}
					helperText={touched.districtOrState && errors.districtOrState}
				/>
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<InputElement
					fullWidth
					isRequired
					label="City / Town"
					name="cityOrTown"
					boxStyles={{ paddingTop: '10px' }}
					value={values.cityOrTown}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.cityOrTown && Boolean(errors.cityOrTown)}
					helperText={touched.cityOrTown && errors.cityOrTown}
				/>
			</Grid>

			<Grid item md={6} sm={6} xs={12}>
				<InputElement
					fullWidth
					isRequired
					label="Post Code / Postal Code"
					name="postcodeOrPostalcode"
					boxStyles={{ paddingTop: '10px' }}
					value={values.postcodeOrPostalcode}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.postcodeOrPostalcode && Boolean(errors.postcodeOrPostalcode)}
					helperText={touched.postcodeOrPostalcode && errors.postcodeOrPostalcode}
				/>
			</Grid>

			<Grid item md={12} sm={12} xs={12}>
				<InputElement
					fullWidth
					isRequired
					label="Address"
					name="address"
					boxStyles={{ paddingTop: '10px' }}
					value={values.address}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched.address && Boolean(errors.address)}
					helperText={touched.address && errors.address}
				/>
			</Grid>
		</Grid>
	</fieldset>
);

export default BusinessInfoForm;
