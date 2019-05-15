import React from "react";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const newDate = new Date();
    this.setState(prevState =>
      prevState.date !== newDate ? { date: new Date() } : false
    );
  }
  render() {
    return (
      <div
        className="bg-dark dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <a className="text-success dropdown-item dropdownElem" href="#top">
          Time: {this.state.date.toLocaleTimeString()}
        </a>
        <a className="text-primary dropdown-item dropdownElem" href="#top">
          Date: {this.state.date.toLocaleDateString()}
        </a>
      </div>
    );
  }
}
