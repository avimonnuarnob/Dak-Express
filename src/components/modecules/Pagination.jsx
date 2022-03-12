import { TablePagination } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { numberOfRowsPerPage } from '../../utils/constants';
import PaginationActions from './PaginationActions';

const Pagination = ({ data = 0, rowsPerPage = 25, page = 0, handlePageChange = null, handlePageRowsChange = null }) => {
	// eslint-disable-next-line no-unused-vars
	const [rowsPerPageOptions, setRowsPerPageOptions] = useState(numberOfRowsPerPage);

	return (
		<TablePagination
			rowsPerPageOptions={rowsPerPageOptions}
			colSpan={3}
			count={data}
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

Pagination.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	data: PropTypes.array.isRequired,
	rowsPerPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	page: PropTypes.number.isRequired,
	handlePageChange: PropTypes.func.isRequired,
	handlePageRowsChange: PropTypes.func.isRequired,
};

export default Pagination;
