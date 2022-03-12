import { Box } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locationUrls, methods, types } from '../../../apis/urls';
import useAxios from '../../../apis/useAxios';
import Pagination from '../../../components/modecules/Pagination';
import useBreadcrumb from '../../../hooks/useBreadcrumb';
import { setBreadcrumb } from '../../../reducers/BreadcrumbReducer';
import { numberOfRowsPerPage } from '../../../utils/constants';
import LocationHeader from './parts/LocationHeader';
import LocationTable from './parts/LocationTable';

const PickupLocations = () => {
	const { t } = useTranslation();
	const [pageNumber, setPageNumber] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(() => localStorage.getItem('rows_per_page') || numberOfRowsPerPage[0]);
	const [locations, setLocations] = useState([]);
	const [metadata, setMetadata] = useState({});
	// eslint-disable-next-line no-unused-vars
	const { _, dispatch } = useBreadcrumb();
	const { requestToServerWith } = useAxios();

	const breadcrumbs = useMemo(
		() => [
			{ title: t('dashboard'), link: 'dashboard' },
			{ title: t('pickup-locations'), link: 'locations/pickup', current: true },
		],
		[t]
	);

	const getPickupLocations = async (options) => {
		try {
			const response = await requestToServerWith({
				url: locationUrls.locations,
				method: methods.GET,
				params: { type: types.pickup || 'PICKUP', ...options },
			});

			if ([200, 201].includes(response?.status)) {
				if (response?.data?.results) {
					setLocations(response?.data?.items);
					setMetadata(response?.data?.metadata);
				}
			}
			// eslint-disable-next-line no-shadow
		} catch (error) {
			console.debug(error);
		}
	};

	const handlePageChange = (event, page) => {
		setPageNumber(page);
		getPickupLocations({ limit: rowsPerPage, offset: page * rowsPerPage });
	};

	const handlePageRowsChange = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		localStorage.setItem('rows_per_page', parseInt(event.target.value, 10));
		getPickupLocations({ limit: parseInt(event.target.value, 10) });
	};

	useEffect(() => {
		getPickupLocations({ limit: rowsPerPage });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(setBreadcrumb(breadcrumbs));
	}, [breadcrumbs, dispatch]);

	return (
		<Box sx={{ py: 2, px: 3 }}>
			<LocationHeader />

			<Box sx={{ mt: 3 }}>
				<LocationTable locationData={locations} />
			</Box>

			<Box sx={{ py: '10px' }}>
				<Pagination
					data={metadata?.pagination?.totalCount}
					page={pageNumber}
					rowsPerPage={parseInt(rowsPerPage, 10)}
					handlePageChange={handlePageChange}
					handlePageRowsChange={handlePageRowsChange}
				/>
			</Box>
		</Box>
	);
};

export default PickupLocations;
