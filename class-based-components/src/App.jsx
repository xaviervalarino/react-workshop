import { Component } from "react";
import Users from "./components/Users";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Users />
        </div>
      </div>
    );
  }
}
