/* eslint-disable no-param-reassign */
// const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;

// if (!values?.password) {
// 	errors.password = 'Password is required';
// } else if (!passwordRegex.test(values?.password)) {
// 	errors.password = `Password must be a minimum of 8 characters including number, Upper, Lower And
// 	one special character`;
// }

const validate = (values) => {
	const errors = {};

	if (!values?.currentPassword) {
		errors.currentPassword = 'Current Password is required';
	} else if (values?.currentPassword?.length < 6) {
		errors.currentPassword = `Current Password must be a minimum of 6 characters`;
	}

	if (!values?.newPassword) {
		errors.newPassword = 'New Password is required';
	} else if (values?.newPassword?.length < 6) {
		errors.newPassword = `New Password must be a minimum of 6 characters`;
	}

	if (!values?.confirmNewPassword) {
		errors.confirmNewPassword = 'Confirm New Password is required';
	} else if (values?.confirmNewPassword?.length < 6) {
		errors.confirmNewPassword = `Confirm New Password must be a minimum of 6 characters`;
	}

	if (values?.newPassword && values?.confirmNewPassword && values?.newPassword !== values?.confirmNewPassword) {
		errors.confirmNewPassword = 'Password does not matched';
	}

	return errors;
};

export default validate;
