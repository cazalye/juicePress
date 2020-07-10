import React, { Component} from 'react';
// import './styles/App.css';
import Navbar from './components/navbar';
import View from './components/view';
// import Footer from './components/footer';
import { withRouter } from "react-router";


class App extends Component <any,any> {
  state = {
    navbarClass: "scroll-top"
  }
  navbarScrollStyle() {
    const appDiv: any = document.getElementsByClassName("App");
    if (appDiv.length) {
        const position = appDiv[0].scrollTop;
        if (position > 100 && this.state.navbarClass === "scroll-top") {
          this.setState({
            navbarClass: "scrolled"
          });
        }
        if (position <= 100 && this.state.navbarClass !== "scroll-top") {
          this.setState({
            navbarClass: "scroll-top"
          });
        }
    }
  }

  render() { 
  return (
    <div onScroll={e => {this.navbarScrollStyle();}} className={`App ${this.state.navbarClass}`}>
      <Navbar/>
      <View/>
      {/* <Footer/> */}
    </div>
  );
}
}
export default withRouter(App);
