/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Divider, List, ListItem, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Pagination from '../../../components/modecules/Pagination';
import notificationData from './notificationData.json';

const useStyles = makeStyles((theme) => ({
	item: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: theme.spacing(3, 8),
		width: '100%',
		color: theme.palette.typography.main,
	},
	'item--unread': {
		backgroundColor: theme.palette.primary.sec,
	},
	'item--read': {
		backgroundColor: theme.palette.primary.white,
	},
	item__title: {
		fontWeight: '300 !important',
		letterSpacing: '0.15px !important',
		marginBottom: '10px !important',
		'& span': {
			fontWeight: 'bold',
		},
		'& + *': {
			letterSpacing: '0.5%',
			color: theme.palette.secondary.main,
		},
	},
	item__status: {
		borderRadius: '50%',
		width: '10px',
		aspectRatio: '1',
		backgroundColor: theme.palette.status.pending,
	},
	item__icon: {
		display: 'flex',
		alignItems: 'center',
		gap: '4px',
	},
}));

const AllNotificationsBody = ({ status }) => {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const [formatedData, setFormatedData] = useState({});

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const formatData = useCallback(
		(dataArr) =>
			(rowsPerPage > 0
				? dataArr
						.sort((a, b) => new Date(b.date) - new Date(a.date))
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				: dataArr
			)?.reduce((acc, cur) => {
				if (cur.date in acc) {
					acc[cur.date].push(cur);
				} else {
					acc[cur.date] = [];
					acc[cur.date].push(cur);
				}
				return acc;
			}, {}),
		[page, rowsPerPage]
	);

	useEffect(() => {
		if (status) {
			setFormatedData(
				formatData(notificationData.filter((el) => el.status === status))
			);
		} else {
			setFormatedData(formatData(notificationData));
		}
	}, [status, formatData]);

	console.log(formatedData);
	return (
		<>
			<Paper sx={{ mt: 2 }}>
				<Box p={2}>
					{Object.keys(formatedData).map((key, index) => (
						<Fragment key={index.toString()}>
							<Typography
								color="status.pending"
								variant="h5"
								fontWeight="600"
								px={4}
								py={2}
							>
								{key}
							</Typography>
							<List disablePadding aria-label="mailbox folders">
								{formatedData[key].map((el, i) => (
									<Fragment key={i.toString()}>
										<ListItem disablePadding button>
											<Box
												className={`${classes.item} ${
													el.status === 'read'
														? classes['item--read']
														: classes['item--unread']
												}`}
											>
												<Box>
													<Typography className={classes.item__title}>
														{/* <span>Your Shipment</span> has been delivered. Thank you. */}
														{el.message}
													</Typography>
													<Box className={classes.item__icon}>
														<AccessTimeIcon sx={{ fontSize: '16px' }} />
														<Typography variant="body2">1 hour ago</Typography>
													</Box>
												</Box>
												{el.status === 'unread' && (
													<Box className={classes.item__status} />
												)}
											</Box>
										</ListItem>
										<Divider light />
									</Fragment>
								))}
							</List>
						</Fragment>
					))}
				</Box>
			</Paper>

			<Pagination
				data={
					status
						? notificationData.filter((el) => el.status === status)
						: notificationData
				}
				page={page}
				rowsPerPage={rowsPerPage}
				handlePageChange={handlePageChange}
				handlePageRowsChange={handlePageRowsChange}
			/>
		</>
	);
};

export default AllNotificationsBody;
