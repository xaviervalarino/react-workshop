import { Component } from "react";
import UserFinder from "./components/UserFinder";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <UserFinder />
        </div>
      </div>
    );
  }
}
