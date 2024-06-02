import { Component } from "react";

export default class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}
		return this.props.children;
	}
}
