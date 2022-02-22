/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackButton from '../../components/atoms/BackButton';
import HeaderTitle from '../../components/atoms/HeaderTitle';
import RadioInputField from '../../components/modecules/RadioInputField';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../reducers/BreadcrumbReducer';
import isEmpty from '../../utils/isEmpty';
import CouriersListTable from './parts/CouriersListTable';
import DangerousGoodsDeclaration from './parts/DangerousGoodsDeclaration';
import PercelDetailsForm from './parts/PercelDetailsForm';
import PickupDetailsForm from './parts/PickupDetailsForm';
import ReceiverDetailsForm from './parts/ReceiverDetailsForm';
import PreviewFormData from './PreviewFormData';
import initialValues from './validation/initialValues';
import validate from './validation/validate';

const CreateNewShipment = () => {
	const { t } = useTranslation();

	const packageSelectionItems = [
		{ id: '1ecaf118-84d1-11ec-a8a3-0242ac120002', value: 'Send', label: t('send-a-package') },
		{ id: '40129af6-84d1-11ec-a8a3-0242ac120002', value: 'Receive', label: t('receive-a-package') },
	];

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('create-a-shipment'), link: 'new-shipment', current: true },
		],
		[t]
	);

	const [packageSelection, setPackageSelection] = useState(packageSelectionItems[0]?.value);
	const [showCouriersAndPreviewButton, setShowCouriersAndPreviewButton] = useState(false);
	const [previewData, setPreviewData] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();

	const onChange = (event) => setPackageSelection(event.target.value);

	// eslint-disable-next-line no-unused-vars
	const onSubmit = (data, fn, error) => {
		console.log(data);
		setShowCouriersAndPreviewButton(true);
	};

	const handlePreviewAndProceed = (data) => () => {
		console.log(data);

		if (!isEmpty(data)) {
			localStorage.setItem('previewShipmentData', JSON.stringify(data));
			setPreviewData(true);
		}
	};

	const handleResetForm = (formState) => () => {
		formState.setValues(initialValues);
		setShowCouriersAndPreviewButton(false);

		if (localStorage.getItem('previewShipmentData')) {
			localStorage.removeItem('previewShipmentData');
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	if (previewData) return <PreviewFormData setPreviewData={setPreviewData} />;

	return (
		<Grid container sx={{ px: 3, py: 2 }}>
			<Grid item xs={12} mb={3}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<HeaderTitle label={t('create-a-shipment')} />
					<BackButton redirectTo="/shipments" label={t('back-to-shipments')} />
				</Box>
			</Grid>

			<Formik
				initialValues={JSON.parse(localStorage.getItem('previewShipmentData')) ?? initialValues}
				validate={validate}
				onSubmit={onSubmit}
				enableReinitialize
			>
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
							<PercelDetailsForm title={t('parcel-details')} {...props} />
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
									{t('reset')}
								</Button>

								<Box sx={{ m: 1 }} />

								{showCouriersAndPreviewButton ? (
									<Button
										disabled={!props?.values?.courier}
										variant="contained"
										size="large"
										color="secondary"
										type="button"
										onClick={handlePreviewAndProceed(props?.values)}
										sx={{ px: 12 }}
									>
										{t('preview-and-proceed')}
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
										{t('get-price')}
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
