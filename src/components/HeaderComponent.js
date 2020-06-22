import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Python_postform from './PythonFormComponent';

class Header extends Component {

  constructor(props){
    super(props);

    this.state = { 
      isNavOpen: false,
      isModalOpen:  false
    };


    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handlelogin = this.handlelogin.bind(this);
    // this.pythoncomponent = this.pythoncomponent.bind(this);

  }


  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen

    });
  }


  


  toggleNav(){
    this.setState ({
      isNavOpen: !this.state.isNavOpen
    });
  }

  handlelogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }


  render() {
    return(
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={ this.toggleNav } />
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
            <Collapse isOpen = { this.state.isNavOpen } navbar>
              <Nav Navbar>
                <NavItem>
                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="fa fa-chevron-right fa-lg"></span> Forms
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink className="nav-link" to='/contactperson'><span className="fa fa-address-card fa-lg"></span> Contact Person</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" to='/attributes'><span className="fa fa-envelope fa-lg"></span> Skills Form</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink className="nav-link"  to='/home'>Reset</NavLink>
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>


            
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button onClick={this.toggleModal}> <span className="fa fa-sign-in fa-lg"></span>Login</Button>
                </NavItem>
                <Nav class="ml-4" navbar>
                <NavItem>
                  <Button color="link" href="/logout" className="mx-3"><span className="fa fa-sign-out"></span>Logout</Button>
                </NavItem>
                </Nav>

                <Nav class="ml-3" navbar>
                <NavItem>
                    <Python_postform postapi = { this.props.post_api }
                        reset_post_api_form = {this.props.reset_post_api_form}  />
                </NavItem>
                </Nav>
              
              </Nav>                 
                

            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen ={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handlelogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="text" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>      

              <FormGroup check>
                <Label check>  
                <Input type="checkbox" id="remember" name="remember"
                  innerRef={(input) => this.remember = input} />
                Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value='submit' color="primary">Login</Button>


            </Form>
          </ModalBody>
        </Modal>



      </div>
    );  
  }
} 

export default Header;