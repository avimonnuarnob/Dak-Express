import { Box } from '@mui/material';
import QuickLinks from './components/QuickLinks';
import ShipmentChartStats from './components/ShipmentChartStats';
import ShipmentStat from './components/ShipmentStat';
import ShipmentTable from './components/ShipmentTable';

const index = () => (
	<>
		<ShipmentStat />
		<Box sx={{ p: 2, mx: 1 }}>
			<ShipmentChartStats />
			<QuickLinks />
			<ShipmentTable />
		</Box>
	</>
);

export default index;
