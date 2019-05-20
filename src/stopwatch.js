import React from "react";

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.showTime = this.showTime.bind(this);
    this.state = {
      startTime: null,
      endTime: null,
      running: false,
      count: 0,
      duration: 0
    };
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true,
        startTime: new Date()
      });
      document.querySelector("#spinner").classList.toggle("d-none");
      console.log(`start`);
    } else {
      alert("Already started");
    }
  }

  stop() {
    if (this.state.running) {
      this.setState({
        running: false,
        endTime: new Date()
      });

      let list = document.querySelectorAll("#duration, #spinner"); //returns NodeList
      for (let eachClass of list) {
        eachClass.classList.toggle("d-none");
      }
    } else {
      alert(`Already stopped or hasn't started yet`);
    }
  }

  reset() {
    this.setState({
      startTime: null,
      endTime: null,
      running: false,
      duration: 0
    });
  }

  showTime() {
    let seconds =
      (this.state.endTime.getTime() - this.state.startTime.getTime()) / 1000;
    let time = this.state.duration + seconds;
    this.setState({
      duration: time
    });
    document.querySelector("#duration").classList.toggle("d-none");
  }

  render() {
    return (
      <div>
        <div className="col-12">
          <button
            className="rounded-circle text-success"
            style={{ width: "80px", height: "80px" }}
            onClick={this.start}
          >
            Start
          </button>
          <button
            className="rounded-circle text-danger"
            style={{ width: "80px", height: "80px" }}
            onClick={this.stop}
          >
            Stop
          </button>
          <button
            className="rounded-circle text-warning"
            style={{ width: "80px", height: "80px" }}
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            id="duration"
            className="d-none rounded-circle text-info"
            style={{ width: "80px", height: "80px" }}
            onClick={this.showTime}
          >
            Duration
          </button>
        </div>
        <div className="col-12 d-flex">
          <div id="spinner" className="col-1 d-none">
            <span className=" spinner-border spinner-border-md" />
          </div>
          <div className="col-11">
            {this.state.duration > 0 ? (
              <h3>The duration is {this.state.duration} seconds</h3>
            ) : this.state.running ? (
              <h3>Stopwatch is running</h3>
            ) : (
              <h3>Not started yet</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}
