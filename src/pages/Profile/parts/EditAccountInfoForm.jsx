/* eslint-disable prettier/prettier */
import { Box, Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import InputElement from '../../../components/modecules/InputElement';
import PhoneNumberInput from '../../../components/modecules/PhoneNumberInput';
import SelectElement from '../../../components/modecules/SelectInput';

const roleItems = [
	{ id: 1, label: 'Admin', value: 'admin' },
	{ id: 2, label: 'Super Admin', value: 'super admin' },
];

const EditAccountInfoForm = () => {
	const {
		isSubmitting,
		values,
		handleBlur,
		handleChange,
		touched,
		errors,
		setFieldValue,
	} = useFormikContext();

	return (
		<fieldset disabled={isSubmitting} style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<InputElement
						fullWidth
						isRequired
						label="First Name"
						name="firstName"
						boxStyles={{ paddingTop: '10px' }}
						value={values.firstName}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.firstName && Boolean(errors.firstName)}
						helperText={touched.firstName && errors.firstName}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<InputElement
						fullWidth
						isRequired
						label="Last Name"
						name="lastName"
						boxStyles={{ paddingTop: '10px' }}
						value={values.lastName}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.lastName && Boolean(errors.lastName)}
						helperText={touched.lastName && errors.lastName}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<Box sx={{ paddingTop: '10px' }}>
						<PhoneNumberInput
							fullWidth
							isRequired
							label="Mobile Number"
							name="phone"
							value={values.phone}
							handleChange={handleChange}
							handleBlur={handleBlur}
							error={touched.phone && Boolean(errors.phone)}
							helperText={touched.phone && errors.phone}
							setFieldValue={setFieldValue}
						/>
					</Box>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<InputElement
						fullWidth
						isRequired
						label="Email"
						name="email"
						boxStyles={{ paddingTop: '10px' }}
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.email && Boolean(errors.email)}
						helperText={touched.email && errors.email}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<SelectElement
						fullWidth
						items={roleItems}
						label="Role"
						name="role"
						boxStyles={{ paddingTop: '10px' }}
						value={values.role}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.role && Boolean(errors.role)}
						helperText={touched.role && errors.role}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<InputElement
						fullWidth
						label="NID"
						name="NID"
						boxStyles={{ paddingTop: '10px' }}
						value={values.nid}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.nid && Boolean(errors.nid)}
						helperText={touched.nid && errors.nid}
					/>
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default EditAccountInfoForm;
