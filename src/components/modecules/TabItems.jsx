/* eslint-disable react/jsx-props-no-spreading */
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	tabs: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

const TabItems = ({ items = [], children = null, ...rest }) => {
	const classes = useStyles();

	return (
		<Box className={classes.tabs}>
			<Tabs
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
				aria-label="product-status-tabs"
				textColor="secondary"
				indicatorColor="secondary"
				{...rest}
			>
				{items?.map((item) => (
					<Tab key={item?.id} label={item.label} value={item?.value} />
				))}
			</Tabs>
			<Box>{children}</Box>
		</Box>
	);
};

TabItems.propTypes = {
	items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
	// eslint-disable-next-line react/require-default-props
	children: PropTypes.element,
};

export default TabItems;
