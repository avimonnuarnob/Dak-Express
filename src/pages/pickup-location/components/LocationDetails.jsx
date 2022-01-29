/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import TableActionButton from '../../../components/atoms/TableActionButton';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'grid',
		gridTemplateColumns: '1fr',

		[theme.breakpoints.up('md')]: {
			// gridTemplateColumns: '1fr',
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
	card__item: {
		borderBottom: '1px solid #E5EBF0',
		'&: last-child': {
			borderBottom: 0,
		},
	},
}));

const LocationDetails = () => {
	const classes = useStyles();
	return (
		<Paper
			sx={{
				p: 2,
				mt: 3,
			}}
		>
			<Box
				sx={{
					py: 3,
					display: 'flex',
					borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}`,
				}}
			>
				<Typography
					fontSize="24px"
					fontWeight="bold"
					sx={{
						color: 'status.pending',
					}}
				>
					Pickup Details
				</Typography>
				<Box
					sx={{
						ml: 'auto',
					}}
				>
					<TableActionButton label="EDIT" color="status.pending" Icon={EditIcon} />
				</Box>
			</Box>

			<Box
				sx={{
					border: '1px solid #E5EBF0',
					mt: 3,
					borderRadius: 2,
					overflow: 'scroll',
				}}
			>
				{/* <Grid container>
					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
							borderBottom: '1px solid #E5EBF0',
						}}
					>
						<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
							Full Name
						</Typography>
						<Typography variant="body2" display="inline" padding={2}>
							Md Rafez Hossain
						</Typography>
					</Grid>

					<Grid
						item
						md={6}
						sm={12}
						sx={{
							display: 'flex',
							borderBottom: '1px solid #E5EBF0',
							borderRight: {
								md: '1px solid #E5EBF0',
								sm: 0,
							},
						}}
					>
						<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
							Business Name
						</Typography>
						<Typography variant="body2" display="inline" padding={2}>
							Cityscape Global Ltd
						</Typography>
					</Grid>
					<Grid
						item
						md={6}
						sm={12}
						sx={{
							display: 'flex',

							borderBottom: '1px solid #E5EBF0',
						}}
					>
						<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
							Mobile Number
						</Typography>
						<Typography variant="body2" display="inline" padding={2}>
							+880 1324 249011
						</Typography>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
						}}
					>
						<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
							Address
						</Typography>
						<Typography variant="body2" display="inline" padding={2}>
							Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh.
						</Typography>
					</Grid>
				</Grid> */}

				{/* <table>
					<tr>
						<td>
							<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
								Full Name
							</Typography>
						</td>
						<td>
							<Typography variant="body2" display="inline" padding={2}>
								Md Rafez Hossain
							</Typography>
						</td>
					</tr>
					<tr>
						<td>
							<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
								Business Name
							</Typography>
						</td>
						<td
							style={{
								borderRight: '1px solid black',
							}}
						>
							<Typography variant="body2" display="inline" padding={2}>
								Cityscape Global Ltd
							</Typography>
						</td>

						<td
							style={{
								marginLeft: 'auto',
							}}
						>
							<Typography variant="body2" fontWeight="bold" display="inline" padding={2}>
								Mobile Number
							</Typography>
						</td>
						<td>
							<Typography variant="body2" display="inline" padding={2}>
								+880 1324 249011
							</Typography>
						</td>
					</tr>
				</table> */}

				<div className={classes.card}>
					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__item}
					>
						Full Name
					</Typography>

					<Typography
						variant="body2"
						display="inline"
						padding={2}
						className={classes.card__item}
						sx={{
							gridColumn: '2 / -1',
						}}
					>
						Md Rafez Hossain
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__item}
						sx={{
							gridColumn: '1',
						}}
					>
						Business Name
					</Typography>

					<Typography
						variant="body2"
						display="inline"
						padding={2}
						className={classes.card__item}
						sx={{
							borderRight: {
								md: '1px solid #E5EBF0',
								sm: 0,
							},
						}}
					>
						Cityscape Global Ltd
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__item}
					>
						Mobile Number
					</Typography>

					<Typography variant="body2" display="inline" padding={2} className={classes.card__item}>
						+880 1324 249011
					</Typography>

					<Typography
						variant="body2"
						fontWeight="bold"
						display="inline"
						padding={2}
						className={classes.card__item}
					>
						Address
					</Typography>
					<Typography
						variant="body2"
						display="inline"
						padding={2}
						className={classes.card__item}
						sx={{
							gridColumn: '2 / -1',
						}}
					>
						Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh.
					</Typography>
				</div>
			</Box>
		</Paper>
	);
};

export default LocationDetails;
