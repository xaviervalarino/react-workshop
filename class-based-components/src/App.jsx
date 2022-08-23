import { Component } from "react";
import UserFinder from "./components/UserFinder";
import UserContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Alfred" },
  { id: "u2", name: "John" },
  { id: "u3", name: "William" },
  { id: "u4", name: "Suzanne" },
  { id: "u5", name: "Ricardo" },
];

export default class App extends Component {
  usersContext = {
    users: DUMMY_USERS
  }
  render() {
    return (
      <UserContext.Provider value={ this.usersContext }>
        <UserFinder />
      </UserContext.Provider>
    );
  }
}
