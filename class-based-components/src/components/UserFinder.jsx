import { Component } from "react";
import Users from "./Users";
import UsersContext from "../store/users-context";

export default class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    // state is always an object in Class-based components
    this.state = { filteredUsers: [], searchTerm: "" };
  }
  // similar to `useEffectI()` with empty dependency array
  componentDidMount() {
    // simulate HTTP fetch request
    setTimeout(() => {
      this.setState({ filteredUsers: this.context.users });
      console.log("set `filteredUsers`");
    }, 1000);
  }
  // basically like `useEffect()` with prevState.searchTerm as a dep
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
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
