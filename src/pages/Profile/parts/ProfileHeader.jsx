/* eslint-disable import/no-extraneous-dependencies */
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import BackButton from '../../../components/atoms/BackButton';
import HeaderTitle from '../../../components/atoms/HeaderTitle';

const ProfileHeader = ({ label }) => (
	<Box sx={{ display: { xs: 'block', sm: 'flex' }, alignItems: 'center' }}>
		<HeaderTitle label={label} />
		<BackButton />
	</Box>
);

ProfileHeader.propTypes = {
	label: PropTypes.string.isRequired,
};

export default ProfileHeader;
