import { Component } from 'react';
import AlertModal from '../modecules/AlertModal';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, errorModal: false };
	}

	static getDerivedStateFromError(error) {
		console.log(error);
		return this.setState((prevState) => ({ ...prevState, hasError: true, errorModal: true }));
		// return { hasError: true, errorModal: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log({ error, errorInfo });
		return this.setState((prevState) => ({ ...prevState, hasError: true, errorModal: true }));
	}

	// eslint-disable-next-line react/no-unused-class-component-methods
	handleCloseErrorModal(modal) {
		this.setState({ errorModal: modal });
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		const { hasError, errorModal } = this.state;
		const { children } = this.props;

		console.log(this.state);

		if (hasError) {
			return (
				errorModal && (
					<AlertModal
						title="Opps! Something went wrong!"
						description="Something went wrong please refresh"
						button="Refresh"
						showModal={errorModal}
						closeModal={this.handleCloseErrorModal}
					/>
				)
			);
		}

		return children;
	}
}

export default ErrorBoundary;
