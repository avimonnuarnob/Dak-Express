import { TablePagination } from '@mui/material';
import React, { useState } from 'react';
import PaginationActions from './PaginationActions';

const Pagination = ({
	data = [],
	rowsPerPage = 20,
	page = 0,
	handlePageChange = null,
	handlePageRowsChange = null,
}) => {
	// eslint-disable-next-line no-unused-vars
	const [rowsPerPageOptions, setRowsPerPageOptions] = useState([20, 50, 100]);

	return (
		<TablePagination
			rowsPerPageOptions={rowsPerPageOptions}
			colSpan={3}
			count={data?.length}
			rowsPerPage={rowsPerPage}
			page={page}
			SelectProps={{ inputProps: { 'aria-label': 'rows per page' }, native: true }}
			onPageChange={handlePageChange}
			onRowsPerPageChange={handlePageRowsChange}
			ActionsComponent={PaginationActions}
			sx={{ display: 'block', borderBottom: 0 }}
		/>
	);
};

export default Pagination;
