import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false, errorMsg: "" };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true, errorMsg: error.message });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <p style={{ color: "crimson", fontWeight: "bold" }}>
            {this.state.errorMsg}
          </p>
        </>
      );
    }
    return this.props.children;
  }
}
