import { Component } from "react";
import User from "./User";

const DUMMY_USERS = [
  { id: "u1", name: "Alfred" },
  { id: "u2", name: "John" },
  { id: "u3", name: "William" },
  { id: "u4", name: "Suzanne" },
  { id: "u5", name: "Ricardo" },
];

export default class Users extends Component {
  constructor() {
    super();
    // state is always an object in Class-based components
    this.state = { showUsers: true };
  }
  toggleUsersHandler() {
    this.setState((prev) => ({ showUsers: !prev.showUsers, }));
  }
  render() {
    const userList = (
      <ul>
        {DUMMY_USERS.map((user) => (
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
