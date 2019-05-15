import React from "react";
import "./App.css";
import { Player } from "./videos/video";
import throttle from "lodash/throttle";
import { myGif, myBackground, photos, images, videos } from "./images/img";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import ImageGallery from "react-image-gallery";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import { Timer } from "./timer";

//FIRST COMPONENT
export class FirstApp extends React.Component {
  constructor(props) {
    super(props);
    this.alerto = this.handleAlert.bind(this);
    this.toggleSong = this.handleSongToggle.bind(this);
    this.toggleLogo = this.handleLogoToggle.bind(this);
    this.imgToggle = this.handleImgToggle.bind(this);
    this.imgToggle2 = this.handleImg2Toggle.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.consoleIt = this.consoleIt.bind(this);
    this.componentChange = this.componentChange.bind(this);
    this.toggleNewClass = this.toggleNewClass.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.throttle = throttle(this.alerto, 10000);
    this.state = {
      mood: "cool",
      songs: "Hi there",
      logo: myGif.myGif2,
      background: myBackground.img1,
      newBackground: myBackground.img3,
      currentImage: 0,
      video: videos.video1,
      component: null
    };
  }

  consoleIt(e) {
    // console.log(e.target.className.includes("toggle-on"));
    // console.log(c);
  }

  menuToggle(e) {
    document.getElementById("menu_wrapper").classList.toggle("d-none");
    document
      .getElementById("main_content_wrapper")
      .classList.toggle("col-sm-12");
  }
  toggleNewClass = (newClass, secondClass) => e => {
    const parentDiv = e.target.parentNode;
    const hasRowClass = parentDiv.className.includes("row");
    let children = e.target.children;
    if (hasRowClass) {
      children = parentDiv.children;
    }
    for (let i = 0; i < children.length; i++) {
      let c = children[i];
      c.classList.toggle(newClass);
      c.classList.toggle(secondClass);
    }
  };
  componentChange(e) {
    const isChecked = document.getElementById("painInput").checked;
    // const onOff = e.target.className.includes("toggle-on");
    const videoComponent = (
      <Player chooseVideo={this.chooseVideo} src={this.state.video} />
    );
    this.setState({
      component: isChecked ? videoComponent : null
    });
    console.log(this.state.video);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  handleAlert() {
    if (this.props.code === " src/app") {
      alert("Hi, I got the prop");
    } else {
      alert("err");
    }
  }

  handleSongToggle() {
    const song =
      this.state.songs === "Hi there" ? "Vika loves red color" : "Hi there";

    this.setState({ songs: song });
  }

  handleLogoToggle() {
    const myGif3 = myGif.myGif3;
    const myGif2 = myGif.myGif2;
    const newLogo = this.state.logo === myGif3 ? myGif2 : myGif3;

    this.setState({
      logo: newLogo
    });
  }

  handleImgToggle() {
    const img1 = myBackground.img1;
    const img2 = myBackground.img2;
    const newImg = this.state.background === img2 ? img1 : img2;

    this.setState({
      background: newImg
    });
  }

  handleImg2Toggle() {
    const img3 = myBackground.img3;
    const img4 = myBackground.img4;
    const newImg = this.state.newBackground === img3 ? img4 : img3;

    this.setState({
      newBackground: newImg
    });
  }

  componentDidMount() {
    console.log("I am being called as soon as component is mounted!");
  }

  chooseVideo(newVideo) {
    console.log(newVideo);
    // const nextVideo =
    //   this.state.video === videos.video1 ? videos.video2 : videos.video1;
    const isChecked = document.getElementById("painInput").checked;
    const videoComponent = (
      <Player chooseVideo={this.chooseVideo} src={this.state.video} />
    );
    this.setState({
      video: videos[newVideo],
      component: isChecked ? videoComponent : null
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div
          className="row"
          style={{ backgroundImage: `url(${this.state.background})` }}
        >
          <div className="col-sm-12 text-white text-center sticky-top">
            <nav
              className="navbar navbar-light bg-dark row"
              onClick={this.toggleNewClass("border", "border-info")}
            >
              <div className="col-sm-3" id="menubar">
                <div className="row">
                  <div className="col-2 align-self-center">
                    <button
                      onClick={this.menuToggle}
                      className="btn btn-outline-info navbar-dark float-right"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                    >
                      <span className="col navbar-toggler-icon" style={{}} />
                    </button>
                  </div>
                  <div className="col-10">
                    <a className="navbar-brand float-left" href="#top">
                      <img
                        alt="img"
                        className="d-inline-block align-top"
                        style={{ height: "30px", width: "80px" }}
                        src="http://static1.squarespace.com/static/56981692fd5d08f1247bfce6/5a00757fc83025097d4bd7ae/5aa69b9424a694f93f96fb13/1520871050136/6.png"
                      />
                    </a>
                    <div>
                      <ul className="nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#top"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            TICK-TACK
                          </a>
                          <Timer />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6" id="mainbar">
                <div className="row justify-content-end" id="">
                  <div className="col-7" id="navbarNavAltMarkup">
                    <ul className="nav">
                      <li className="nav-item active">
                        <a
                          className="text-info nav-link navbar-brand "
                          href="#top"
                        >
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="text-info nav-link" href="#top">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="text-info nav-link" href="#top">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#top">
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form className="col-5 form-inline">
                    <input
                      className="col-9 form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-info my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-sm-3" id="toolbar">
                ToolBar
              </div>
            </nav>
          </div>
          <div
            className="col-sm-3 /*d-none*/ border-right border-danger text-white"
            id="menu_wrapper"
          >
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
            <div>Item - </div>
          </div>
          <div
            className="col-sm-9 border-top border-left border-danger"
            id="main_content_wrapper"
          >
            <div className="Gallery col-12 border border-success">
              <ImageGallery items={images} />
            </div>
            <div
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 50%",
                backgroundImage: `url(${this.state.newBackground})`
              }}
              className="MyApp"
            >
              <header className="App-header">
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox
                  images={photos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                />
              </header>
              <button
                style={{
                  backgroundColor: "#f44336",
                  border: "none",
                  color: "white",
                  padding: "25px 52px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  position: "relative",
                  left: "0px",
                  top: "1px"
                }}
                onClick={this.consoleIt}
              >
                <b>BIGGEST BUTTON</b>
              </button>
            </div>
            <div className="MyApp">
              <header className="App-header">
                <div className="mainEvents">
                  <img src={this.state.logo} className="App-logo" alt="logo" />
                  <button onClick={this.toggleLogo}>Chnage logo</button>
                  <p>
                    Edit <code>{this.props.code}</code> and save to reload.
                  </p>
                  <button className="App-link" href="#" onClick={this.throttle}>
                    Get the prop
                  </button>
                  <p>My mood is {this.state.mood} !!!!!!</p>
                  <div className="test" onClick={this.componentChange}>
                    <input
                      type="checkbox"
                      data-toggle="toggle"
                      data-size="sm"
                      data-on="Video is on !"
                      data-off="Video is off !"
                      data-offstyle="danger"
                      id="painInput"
                    />
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gitbrent.github.io/bootstrap4-toggle/"
                  >
                    Click me for full documentation
                  </a>
                  <div onClick={this.consoleIt}>
                    <input
                      defaultChecked
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="outline-primary"
                      data-offstyle="outline-danger"
                    />
                  </div>
                  <button onClick={this.toggleSong}>Current state</button>
                  <p>This means {this.state.songs}</p>
                  <button onClick={this.imgToggle}>Change Background</button>
                  <p>Need another background huh?</p>
                </div>
                {
                  //Player component render
                  this.state.component
                }
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//SECOND COMPONENT
class SecondApp extends React.Component {
  render() {
    // console.log(`Log at secondapp: ${this.props.children}`);
    return (
      <div className="SecondApp">
        <p>
          This is my second class and I'm listening
          {this.props.j4n}
        </p>
      </div>
    );
  }
}

SecondApp.defaultProps = { j4n: " NaNaaaaa" };

// export default MyApp;
