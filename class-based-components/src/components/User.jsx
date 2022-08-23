import { Component } from "react";

export default class User extends Component {
  // Similar to `useEffect()` clean up function
  componentWillUnmount() {
    console.log(`User "${this.props.name}" unmounted`)
  }
  render() {
    return <li key={this.props.id}>{this.props.name}</li>;
  }
}
