/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data, color }) => {
	return (
		<ResponsiveContainer height={396}>
			<BarChart width={150} height={40} data={data}>
				<XAxis dataKey="name" axisLine={false} tickLine={false} />
				<YAxis axisLine={false} tickLine={false} />
				<Legend />
				<CartesianGrid strokeDasharray="2" vertical={false} />
				<Bar dataKey="uv" fill={color} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Chart;
