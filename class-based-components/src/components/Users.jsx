import { Component } from "react";
import User from "./User";

export default class Users extends Component {
  constructor() {
    super();
    // state is always an object in Class-based components
    this.state = { showUsers: true };
  }
  componentDidUpdate() {
    if(!this.props.users.length) {
      throw new Error('No users provided.')
    }
  }
  toggleUsersHandler() {
    this.setState((prev) => ({ showUsers: !prev.showUsers, }));
  }
  render() {
    const userList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && userList}
      </div>
    );
  }
}
