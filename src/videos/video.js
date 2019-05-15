import React from "react";

export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeV = this.onChangeV.bind(this);
  }

  onChangeV(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
    console.log(`value: ${text}`);
  }
  render() {
    return (
      <div className="videoPlayer" id="test">
        <form onClick={this.onChangeV}>
          <input type="radio" value="video1" name="src" />
          V1
          <input type="radio" value="video2" name="src" />
          V2
          <input type="radio" value="video3" name="src" />
          V3
          <input type="radio" value="video4" name="src" />
          V4
        </form>
        <video
          // src={this.props.chooseVideo}
          src={this.props.src}
          controls
          autostart="true"
          autoPlay
          muted
        />
      </div>
    );
  }
}
