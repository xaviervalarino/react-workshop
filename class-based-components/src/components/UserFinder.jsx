import { Component } from "react";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Alfred" },
  { id: "u2", name: "John" },
  { id: "u3", name: "William" },
  { id: "u4", name: "Suzanne" },
  { id: "u5", name: "Ricardo" },
];

export default class UserFinder extends Component {
  constructor() {
    super();
    // state is always an object in Class-based components
    this.state = { filteredUsers: DUMMY_USERS, searchTerm: "" };
  }
  // basically like `useEffect()` with prevState.searchTerm as a dep
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }
  searchHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <>
        <input type="search" onChange={this.searchHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}
