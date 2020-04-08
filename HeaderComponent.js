import React, { Component } from "react";
import {
  Jumbotron,
  Navbar,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Input,
} from "reactstrap";



export class HeaderComponent extends Component {
    render() {
        return (
          <>
            <Jumbotron fluid>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h2>Purrfect Match</h2>
                    <h4>A Human-Feline Matching App</h4>
                    <hr/>
                  </div>
                </div>
              </div>
            </Jumbotron>
            <Navbar dark sticky='top' expand='md'>
              <NavLink>PurrfectMatch</NavLink>
              <NavLink>Our Cats!</NavLink>
              <NavLink>Apply Today!</NavLink>
            </Navbar>
            <hr />
          </>
        );
    }
}

export default HeaderComponent;
