import { Box } from '@mui/material';
import QuickLinks from './parts/QuickLinks';
import ShipmentChartStats from './parts/ShipmentChartStats';
import ShipmentStatus from './parts/ShipmentStatus';
import ShipmentTable from './parts/ShipmentTable';

// eslint-disable-next-line no-unused-vars
const index = (props) => (
	<>
		<ShipmentStatus />
		<Box sx={{ p: 2, mx: 1 }}>
			<ShipmentChartStats />
			<QuickLinks />
			<ShipmentTable />
		</Box>
	</>
);

export default index;
