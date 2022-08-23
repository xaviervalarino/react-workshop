import { Component } from "react";

export default class User extends Component {
  render() {
    return <li key={this.props.id}>{this.props.name}</li>;
  }
}
