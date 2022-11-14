import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.children = this.props.children;
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError)
      return (
        <>
          <h1>Error!</h1>
        </>
      );
    return this.children;
  }
}

export { ErrorBoundary };
