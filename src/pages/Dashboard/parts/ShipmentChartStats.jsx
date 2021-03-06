/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import { Box, FormControl, MenuItem, Paper, Select, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from './Chart';

const FAKE_DATA = [
	{
		name: 'January',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'February',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'March',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'April',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'May',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'June',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'July',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: 'August',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: 'September',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: 'October',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: 'November',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: 'December',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const useStyles = makeStyles((theme) => ({
	select: {
		height: '2.1875rem',
		border: '1px solid #688128',
		width: '8.75rem',
		[theme.breakpoints.down('md')]: {
			width: '6.25rem',
		},
	},

	status: {},
	status__header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: theme.spacing(4),
		padding: theme.spacing(3, 1),
	},
	status__tab: {
		backgroundColor: '#F5F5F5',
	},
}));

const tabProps = (index, tab) => ({
	id: `tab-${index}`,
	'aria-controls': `tabpanel-${index}`,
	sx: {
		color: (theme) => theme.palette.typography.main,
		p: 3,
		'&.Mui-selected': {
			color: (theme) => theme.palette.primary.white,
			backgroundColor: (theme) =>
				tab === 0
					? theme.palette.status.success
					: tab === 1
					? theme.palette.status.pending
					: theme.palette.status.failed,
		},
	},
});

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`shipmentStatus-tab-${index}`}
			aria-labelledby={`shipmentStatus-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ pr: 3, py: 3, bgcolor: '#ffffff', overflow: 'auto' }}>{children}</Box>}
		</div>
	);
};

const ShipmentChartStats = () => {
	const [year, setYear] = useState('2021');
	const [tab, setTab] = useState(0);
	const { t } = useTranslation();

	const classes = useStyles();

	const handleYearChange = (event) => {
		setYear(event.target.value);
	};

	const handleTabChange = (_, newValue) => {
		setTab(newValue);
	};

	return (
		<Paper>
			<Box className={classes.status__header}>
				<Typography sx={{ typography: { sm: 'h5', xs: 'h6' }, px: 2 }}>{t('shipment-status')}</Typography>
				<FormControl>
					<Select
						labelId="shipmentYear-select-label"
						id="shipmentYear"
						value={year}
						onChange={handleYearChange}
						className={classes.select}
					>
						<MenuItem value={2021}>2021</MenuItem>
						<MenuItem value={2020}>2020</MenuItem>
						<MenuItem value={2019}>2019</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Box>
				<Box sx={{ px: { xs: 1, sm: 3 } }} className={classes.status__tab}>
					<Tabs value={tab} onChange={handleTabChange} TabIndicatorProps={{ style: { display: 'none' } }}>
						<Tab label={t('shipment-status-complete')} {...tabProps(0, tab)} />
						<Tab label={t('shipment-status-intransit')} {...tabProps(1, tab)} />
						<Tab label={t('shipment-status-failed')} {...tabProps(2, tab)} />
					</Tabs>
				</Box>

				<TabPanel value={tab} index={0}>
					<Chart data={FAKE_DATA} color="#3BB900" />
				</TabPanel>
				<TabPanel value={tab} index={1}>
					<Chart data={FAKE_DATA} color="#F29339" />
				</TabPanel>
				<TabPanel value={tab} index={2}>
					<Chart data={FAKE_DATA} color="#FF333F" />
				</TabPanel>
			</Box>
		</Paper>
	);
};

export default ShipmentChartStats;
