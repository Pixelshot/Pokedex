import React, { Component } from "react";

class Refresher extends Component {
  constructor(props) {
    super(props);

    this.refreshPage = this.refreshPage.bind(this);
  }
  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return <button onClick={this.refreshPage}>Click to reload!</button>;
  }
}

export default Refresher;
