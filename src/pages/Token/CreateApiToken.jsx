import { Box } from '@mui/material';
import React from 'react';
import PageTitlebar from '../../components/modecules/PageTitlebar';
import CreateApiTokenBody from './parts/CreateApiTokenBody';

const CreateApiToken = () => (
	<Box
		sx={{
			py: 1,
			px: 1,
		}}
	>
		<PageTitlebar title="Create API Token" />
		<Box
			sx={{
				mt: 2,
				px: 2,
				borderRadius: 3,
			}}
		>
			<CreateApiTokenBody />
		</Box>
	</Box>
);

export default CreateApiToken;
