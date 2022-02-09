/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import RadioInputField from '../../components/modecules/RadioInputField';
import CouriersListTable from './parts/CouriersListTable';
import DangerousGoodsDeclaration from './parts/DangerousGoodsDeclaration';
import PercelDetailsForm from './parts/PercelDetailsForm';
import PickupDetailsForm from './parts/PickupDetailsForm';
import ReceiverDetailsForm from './parts/ReceiverDetailsForm';
import initialValues from './validation/initialValues';
import validate from './validation/validate';

const packageSelectionItems = [
	{ id: '1ecaf118-84d1-11ec-a8a3-0242ac120002', value: 'Send', label: 'Send A Package' },
	{ id: '40129af6-84d1-11ec-a8a3-0242ac120002', value: 'Receive', label: 'Receive A Package' },
];

const CreateNewShipment = () => {
	const [packageSelection, setPackageSelection] = useState(packageSelectionItems[0]?.value);
	const [showCouriersAndPreviewButton, setShowCouriersAndPreviewButton] = useState(false);
	const onChange = (event) => setPackageSelection(event.target.value);

	// eslint-disable-next-line no-unused-vars
	const onSubmit = (data, fn, error) => {
		console.log(data);
		setShowCouriersAndPreviewButton(!showCouriersAndPreviewButton);
	};

	const handleResetForm = (formState) => () => {
		formState.setValues(initialValues);
		setShowCouriersAndPreviewButton(!showCouriersAndPreviewButton);
	};

	return (
		<Grid container>
			<Grid item xs={12} mx={2}>
				<PageTitlebar title="Create A Shipment" />
			</Grid>

			<Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
				{(props) => (
					<Form>
						<Grid item xs={12} px={2} mx={4}>
							<RadioInputField
								row
								name="type"
								items={packageSelectionItems}
								value={packageSelection}
								onChange={onChange}
							/>
						</Grid>

						{packageSelection === 'Send' ? (
							<Grid item xs={12} mx={4}>
								<PickupDetailsForm {...props} />
							</Grid>
						) : (
							<Grid item xs={12} mx={4}>
								<ReceiverDetailsForm {...props} />
							</Grid>
						)}

						{packageSelection === 'Receive' ? (
							<Grid item xs={12} mx={4}>
								<PickupDetailsForm {...props} />
							</Grid>
						) : (
							<Grid item xs={12} mx={4}>
								<ReceiverDetailsForm {...props} />
							</Grid>
						)}

						<Grid item xs={12} mx={4}>
							<PercelDetailsForm {...props} />
						</Grid>

						<Grid item xs={12} mx={4}>
							<DangerousGoodsDeclaration {...props} />
						</Grid>

						{showCouriersAndPreviewButton && (
							<Grid item xs={12} mx={4}>
								<CouriersListTable {...props} />
							</Grid>
						)}

						<Grid item xs={12} mx={4}>
							<Box sx={{ m: 2, display: 'flex', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
								<Button
									variant="outlined"
									type="submit"
									size="large"
									color="secondary"
									onClick={handleResetForm(props)}
									startIcon={<CachedOutlinedIcon />}
									sx={{ px: 4 }}
								>
									Reset
								</Button>

								<Box sx={{ m: 1 }} />

								{showCouriersAndPreviewButton ? (
									<Button
										disabled={!props?.values?.courier}
										variant="contained"
										size="large"
										color="secondary"
										type="submit"
										sx={{ px: 12 }}
									>
										Preview & proceed
									</Button>
								) : (
									<Button
										disabled={!props?.values?.noDangerousGoods}
										variant="contained"
										type="submit"
										size="large"
										color="secondary"
										sx={{ px: 12 }}
									>
										Get Price
									</Button>
								)}
							</Box>
						</Grid>
					</Form>
				)}
			</Formik>
		</Grid>
	);
};

export default CreateNewShipment;
