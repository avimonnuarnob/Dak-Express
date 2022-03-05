export const methods = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
	DELETE: 'delete',
};

export const headers = {};

export const authUrls = {
	signin: '/users/login',
	signup: '/users/register',
	forgetPassword: '/users/request-password-reset',
	resetPassword: '/users/password-reset-complete',
	changePassword: '/users/password-change',
};

export const issueUrls = {
	issues: '/issues',
	issueReply: '/issues/message',
};
