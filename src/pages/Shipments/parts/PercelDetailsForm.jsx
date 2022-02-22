/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button, Grid, Paper } from '@mui/material';
import { FieldArray } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import SelectInputField from '../../../components/modecules/SelectInputField';
import TextInputField from '../../../components/modecules/TextInputField';

const unitTypesItems = [
	{ id: 'ee6d6662-43d5-4e41-b48d-0312c80aba35', value: 'kg', label: 'KG (Kilo Gram)' },
	{ id: '89cbbe4a-863c-11ec-a8a3-0242ac120002', value: 'lb', label: 'LB (Pound)' },
	{ id: '8f51235a-863c-11ec-a8a3-0242ac120002', value: 'oz', label: 'OZ (Ounce)' },
	{ id: '94c34e26-863c-11ec-a8a3-0242ac120002', value: 'gm', label: 'GM (Gram)' },
];

const quantitySelectionItems = [
	{ id: 'd1d0435e-863d-11ec-a8a3-0242ac120002', value: '1', label: '1' },
	{ id: '0eed0330-863e-11ec-a8a3-0242ac120002', value: '2', label: '2' },
	{ id: '14a778d2-863e-11ec-a8a3-0242ac120002', value: '3', label: '3' },
	{ id: '184274b0-863e-11ec-a8a3-0242ac120002', value: '4', label: '4' },
	{ id: '1b9189a8-863e-11ec-a8a3-0242ac120002', value: '5', label: '5' },
	{ id: '1f065e88-863e-11ec-a8a3-0242ac120002', value: '6', label: '6' },
	{ id: '226c100e-863e-11ec-a8a3-0242ac120002', value: '7', label: '7' },
	{ id: '256d8882-863e-11ec-a8a3-0242ac120002', value: '8', label: '8' },
	{ id: '28bdded8-863e-11ec-a8a3-0242ac120002', value: '9', label: '9' },
	{ id: '2da4e6ee-863e-11ec-a8a3-0242ac120002', value: '10', label: '10' },
];

const weightSelectionItems = [
	{ id: '8b0eee72-8640-11ec-a8a3-0242ac120002', value: '1', label: 'Upto 1' },
	{ id: '8eee6e32-8640-11ec-a8a3-0242ac120002', value: '2', label: '1-2' },
	{ id: '9602e27a-8640-11ec-a8a3-0242ac120002', value: '3', label: '2-3' },
	{ id: '99a5e030-8640-11ec-a8a3-0242ac120002', value: '4', label: '3-4' },
	{ id: '9ce4d4d6-8640-11ec-a8a3-0242ac120002', value: '5', label: '4-5' },
	{ id: '9fef08cc-8640-11ec-a8a3-0242ac120002', value: '6', label: '5-6' },
	{ id: 'a2d9516e-8640-11ec-a8a3-0242ac120002', value: '7', label: '6-7' },
	{ id: 'a5ba58ce-8640-11ec-a8a3-0242ac120002', value: '8', label: '7-8' },
	{ id: 'a898d3c2-8640-11ec-a8a3-0242ac120002', value: '9', label: '8-9' },
	{ id: 'ab7e84ba-8640-11ec-a8a3-0242ac120002', value: '10', label: '9-10' },
];

const lengthSelectionItems = [
	{ id: '801d337e-8641-11ec-a8a3-0242ac120002', value: '10', label: '10 CM' },
	{ id: '8994fbb2-8641-11ec-a8a3-0242ac120002', value: '25', label: '25 CM' },
	{ id: '8d2e57d2-8641-11ec-a8a3-0242ac120002', value: '50', label: '50 CM' },
	{ id: '955451d2-8641-11ec-a8a3-0242ac120002', value: '75', label: '75 CM' },
	{ id: 'bd9114d2-8641-11ec-a8a3-0242ac120002', value: '100', label: '1 M' },
	{ id: 'de0347da-8641-11ec-a8a3-0242ac120002', value: '10m', label: '5-10 M' },
];

const widthSelectionItems = [
	{ id: '6c79c62e-8642-11ec-a8a3-0242ac120002', value: '10', label: '10 CM' },
	{ id: '713f7b2c-8642-11ec-a8a3-0242ac120002', value: '25', label: '25 CM' },
	{ id: '74d90ed8-8642-11ec-a8a3-0242ac120002', value: '50', label: '50 CM' },
	{ id: '793fabee-8642-11ec-a8a3-0242ac120002', value: '75', label: '75 CM' },
	{ id: '7d534006-8642-11ec-a8a3-0242ac120002', value: '100', label: '1 M' },
	{ id: '8312c0e8-8642-11ec-a8a3-0242ac120002', value: '10m', label: '5-10 M' },
];

const heightSelectionItems = [
	{ id: '8a72fcd6-8642-11ec-a8a3-0242ac120002', value: '10', label: '10 CM' },
	{ id: '8ec5631e-8642-11ec-a8a3-0242ac120002', value: '25', label: '25 CM' },
	{ id: '928ced64-8642-11ec-a8a3-0242ac120002', value: '50', label: '50 CM' },
	{ id: '98f556f0-8642-11ec-a8a3-0242ac120002', value: '75', label: '75 CM' },
	{ id: '9cfed1fe-8642-11ec-a8a3-0242ac120002', value: '100', label: '1 M' },
	{ id: 'a1922c66-8642-11ec-a8a3-0242ac120002', value: '10m', label: '5-10 M' },
];

const PercelDetailsForm = ({ values = {}, title = '', hideButton = false }) => {
	const { t } = useTranslation();

	return (
		<Paper sx={{ p: 4, m: 2 }} elevation={3}>
			<FormHeaderTitle formTitle={title} />
			<FieldArray
				name="products"
				// eslint-disable-next-line no-unused-vars
				render={({ remove, push }) => (
					<>
						{values?.products?.length > 0 &&
							values?.products?.map((product, index) => (
								<Box key={index}>
									<Grid container rowSpacing={3} columnSpacing={2} pb={5}>
										<Grid item md={6} sm={12} xs={12}>
											<TextInputField
												fullWidth
												isRequired
												label={`${t('product-title')} ${index + 1}`}
												name={`products.${index}.productTitle`}
											/>
										</Grid>

										<Grid item md={3} sm={4} xs={6}>
											<SelectInputField
												items={unitTypesItems}
												fullWidth
												isRequired
												label={t('unit-type')}
												name={`products.${index}.unitType`}
											/>
										</Grid>

										<Grid item md={3} sm={4} xs={6}>
											<SelectInputField
												items={weightSelectionItems}
												fullWidth
												isRequired
												label={t('weight')}
												name={`products.${index}.weight`}
											/>
										</Grid>

										<Grid item md={3} sm={4} xs={6}>
											<SelectInputField
												items={quantitySelectionItems}
												fullWidth
												isRequired
												label={t('quantity')}
												name={`products.${index}.quantity`}
											/>
										</Grid>

										<Grid item md={3} sm={4} xs={6}>
											<SelectInputField
												items={lengthSelectionItems}
												fullWidth
												label={`${t('length')} (CM)`}
												name={`products.${index}.length`}
											/>
										</Grid>

										<Grid item md={3} sm={4} xs={6}>
											<SelectInputField
												items={widthSelectionItems}
												fullWidth
												label={`${t('width')} (CM)`}
												name={`products.${index}.width`}
											/>
										</Grid>

										<Grid item md={3} sm={4} xs={6}>
											<SelectInputField
												items={heightSelectionItems}
												fullWidth
												label={`${t('height')} (CM)`}
												name={`products.${index}.height`}
											/>
										</Grid>
									</Grid>
								</Box>
							))}

						{!hideButton && (
							<Grid item md={12} sm={12} xs={12} sx={{ textAlign: 'center' }}>
								<Button
									size="large"
									variant="outlined"
									color="secondary"
									type="button"
									startIcon={<AddOutlinedIcon />}
									onClick={(event) => {
										event.preventDefault();

										push({
											productTitle: '',
											unitType: '',
											weight: '',
											quantity: '',
											length: '',
											width: '',
											height: '',
										});
									}}
								>
									{t('add-new-product')}
								</Button>
							</Grid>
						)}
					</>
				)}
			/>
		</Paper>
	);
};

PercelDetailsForm.propTypes = {
	values: PropTypes.object,
	title: PropTypes.string,
	hideButton: PropTypes.bool,
};

export default PercelDetailsForm;
