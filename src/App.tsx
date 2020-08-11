import React, { Component} from 'react';
// import './styles/App.css';
import Navbar from './components/navbar';
import View from './components/view';
// import Footer from './components/footer';
import { withRouter } from "react-router";
import ReactGA from 'react-ga';


ReactGA.initialize('UA-175158140-1', {debug: false});


class App extends Component <any, any> {
  // state = {
  //   navbarClass: "scroll-top"
  // }
  // navbarScrollStyle() {
  //   const appDiv: any = document.getElementsByClassName("App");
  //   if (appDiv.length) {
  //       const position = appDiv[0].scrollTop;
  //       if (position > 100 && this.state.navbarClass === "scroll-top") {
  //         this.setState({
  //           navbarClass: "scrolled"
  //         });
  //       }
  //       if (position <= 100 && this.state.navbarClass !== "scroll-top") {
  //         this.setState({
  //           navbarClass: "scroll-top"
  //         });
  //       }
  //   }
  // }

  unlisten: any;
  componentWillMount() {
    // detect page changes and send info to google analytics
    ReactGA.pageview(this.props.location.pathname);
    this.unlisten = this.props.history.listen((location: any, action: any) => {
      ReactGA.pageview(location.pathname);
    });
  }
  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() { 
  return (
    // <div onScroll={e => {this.navbarScrollStyle();}} className={`App ${this.state.navbarClass}`}>
    <div>
      <Navbar/>
      <View/>
    </div>
    // </div>
  );
}
}
export default withRouter(App);