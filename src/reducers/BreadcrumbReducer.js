/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable default-param-last */
export const types = {
	CHANGE_BREADCRUMB: 'CHANGE_BREADCRUMB',
};

export const initialState = [{ title: 'Dashboard', link: 'dashboard', current: true }];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_BREADCRUMB:
			return (state = action.payload);

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const setBreadcrumb = (payload = null) => ({
	type: types.CHANGE_BREADCRUMB,
	payload,
});
