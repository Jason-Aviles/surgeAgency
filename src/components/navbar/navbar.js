import React, { Component } from "react";
import Img from "../../img/logo2.png";
import menu from "../../img/menu-icon.png";
class navbar extends Component {
  state = { headerShow: false ,menuShow:true};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ headerShow: true });
    } else {
      this.setState({ headerShow: false });
    }
  };
 
  render() {
    return (
      <div className="row">


<nav  id="navShow"
          className={
            this.state.menuShow
              ? "center nav nav--clear u-height-2"
              : "center nav nav--black u-height " 
          
          }
        >
          <div className="u-margin-bottom-medium">

            <div className="u-margin-bottom-big">
              <div className="col-1-of-4">
                <div className="header__logo-box " >
                  <img className="header__logo "  src={Img} alt="no pic" />{" "}
                  <img className="header__logo--menu"  src={menu} alt="no pic"     onClick={()=> this.setState({menuShow:!this.state.menuShow})}/>
                </div>
              </div>
            </div>


            <div style={{background:"red !important"}} className={this.state.menuShow ? "u-width": ""}>
            <div className="col-1-of-4">
              <a
                href="#home"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
                onClick={()=> this.setState({menuShow:!this.state.menuShow})}
              >
                Home
              </a>
            </div>
            <div className="col-1-of-4">
              <a    onClick={()=> this.setState({menuShow:!this.state.menuShow})}
                href="#price"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Our Services
              </a>
            </div>
            <div className="col-1-of-4">
              <a  onClick={()=> this.setState({menuShow:!this.state.menuShow})}
                href="#info"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Info
              </a>
            </div>
            <div className="col-1-of-4">
              <a  onClick={()=> this.setState({menuShow:!this.state.menuShow})}
                href="#contact"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Contact Us
              </a>
            </div>
          </div></div>
        </nav>
      



        <nav  id="navShow2"
          className={
            this.state.menuShow
              ? "center nav nav--clear "
              : "center nav nav--black  " 
          
          }
        >
          <div className="u-margin-bottom-medium">

        


      
            <div className="col-1-of-4">
              <a
                href="#home"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Home
              </a>
            </div>
            <div className="col-1-of-4">
              <a
                href="#price"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Our Services
              </a>
            </div>
            <div className="col-1-of-4">
              <a
                href="#info"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Info
              </a>
            </div>
            <div className="col-1-of-4">
              <a
                href="#contact"
                className={
                  this.state.headerShow
                    ? "nav__links nav__links--black"
                    : "nav__links nav__links--clear"
                }
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
//header ?backgprund color :transparent
export default navbar;
