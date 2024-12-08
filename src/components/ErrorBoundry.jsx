import React from "react";

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: flase };
    }

    static getDerivedStateError() {
        // Update state to show fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error or send it to a monitoring service
        console.error("Caught by Error Boundry:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong! Please try again later.</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;