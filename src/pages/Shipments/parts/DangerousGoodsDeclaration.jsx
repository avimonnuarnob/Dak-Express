import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import CheckboxInputField from '../../../components/modecules/CheckboxInputField';
import DangerousGoodsModal from '../../../components/modecules/DangerousGoodsModal';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import TextInputField from '../../../components/modecules/TextInputField';

const dangerousItemsDetections = [
	{
		id: 'd269ec46-87de-11ec-a8a3-0242ac120002',
		value: false,
		label: 'I declare that there are no illegal or dangerous goods',
	},
];

const DangerousGoodsDeclaration = ({ values }) => {
	const [showDangerousProducts, setShowDangerousProducts] = useState(false);

	const showDangerousProductsModal = () => setShowDangerousProducts(!showDangerousProducts);

	return (
		<>
			<Paper sx={{ p: 4, m: 2 }} elevation={3}>
				<FormHeaderTitle formTitle="Dangerous Goods Declarations">
					<Box pb={1}>
						<Typography>
							<b>Reminder:</b> Any product deemed illegal or dangerous by Bangladesh Government is strictly prohibited.
							To see some examples, please{' '}
							<Button color="secondary" size="large" onClick={showDangerousProductsModal}>
								Click Here
							</Button>
						</Typography>
					</Box>
				</FormHeaderTitle>

				<Grid container rowSpacing={3} columnSpacing={2}>
					<Grid item md={12} sm={12} xs={12}>
						<TextInputField name="message" fullWidth label="Message Here..." />
					</Grid>

					<Grid item md={12} sm={12} xs={12}>
						<Grid item md={12} sm={12} xs={12}>
							<CheckboxInputField
								name="noDangerousGoods"
								items={dangerousItemsDetections}
								checked={values.noDangerousGoods}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Paper>

			{showDangerousProducts && (
				<DangerousGoodsModal showModal={showDangerousProducts} closeModal={setShowDangerousProducts} />
			)}
		</>
	);
};

export default DangerousGoodsDeclaration;
