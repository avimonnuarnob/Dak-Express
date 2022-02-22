import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import CheckboxInputField from '../../../components/modecules/CheckboxInputField';
import DangerousGoodsModal from '../../../components/modecules/DangerousGoodsModal';
import FormHeaderTitle from '../../../components/modecules/FormHeaderTitle';
import TextInputField from '../../../components/modecules/TextInputField';

const DangerousGoodsDeclaration = ({ values }) => {
	const { t } = useTranslation();
	const [showDangerousProducts, setShowDangerousProducts] = useState(false);

	const showDangerousProductsModal = () => setShowDangerousProducts(!showDangerousProducts);

	const dangerousItemsDetections = [
		{
			id: 'd269ec46-87de-11ec-a8a3-0242ac120002',
			value: false,
			label: t('dangeous-goods-declaration-checkbox'),
		},
	];

	return (
		<>
			<Paper sx={{ p: 4, m: 2 }} elevation={3}>
				<FormHeaderTitle formTitle={t('dangerous-goods-declarations')}>
					<Box pb={1}>
						<Typography>
							<Trans i18nKey="dangerous-goods-declarations-description">
								<b />
								<Button color="secondary" size="large" onClick={showDangerousProductsModal} />
							</Trans>
						</Typography>
					</Box>
				</FormHeaderTitle>

				<Grid container rowSpacing={3} columnSpacing={2}>
					<Grid item md={12} sm={12} xs={12}>
						<TextInputField name="message" fullWidth label={t('message-here')} />
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
