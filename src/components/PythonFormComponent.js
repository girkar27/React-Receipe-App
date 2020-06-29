import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import { Control, Form } from 'react-redux-form';

class Python_postform extends Component {

	constructor(props){
	    super(props);

	    this.state = { 
	      	python_form_open: false
		};

		this.toggle_python_form = this.toggle_python_form.bind(this);
		this.formsubmit = this.formsubmit.bind(this);
	}

	toggle_python_form() {
    	this.setState({
      		python_form_open: !this.state.python_form_open

    	});
    }

  	formsubmit(values) {

        this.props.postapi(values.firstname, values.lastname, values.age, values.skills, values.address);
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Entry Added to the server:  ' + JSON.stringify(values));
        this.props.reset_post_api_form(); 	
        // event.preventDefault();
	}


	render() {
		return(
			<div>
				<div>
					<Button color="info" onClick = {this.toggle_python_form } className="mx-3">
					<span className="fa fa-arrow-down"></span>Entry</Button>
				</div>
				<Modal isOpen ={ this.state.python_form_open } toggle={ this.toggle_python_form }>
	            	<ModalHeader toggle= { this.toggle_python_form }>Add Entry</ModalHeader>
	          		<ModalBody>
	          			<Form model="python_post_api" onSubmit= { (values) => this.formsubmit(values) }>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Firstname</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="first name"
                                        className="form-control"/>
   								</Col>
   							</Row>

   							<Row className="form-group">
			                    <Label htmlFor="lastname" md={2}>Lastname</Label>
				                    <Col md={10}>
					                    <Control.text model=".lastname" id="lastname" name="lastname"
						                    placeholder="lastname"
						                    className="form-control"/>
				                    </Col>
			                    </Row>

   							<Row className="form-group">
                                <Label htmlFor="age" md={2}>Age</Label>
                                <Col md={4}>
                                    <Control.text model=".age" id="age" name="age"
                                        placeholder="Age"
                                        className="form-control"/>
   								</Col>
   								<Label htmlFor="skills" md={{size:1, offset:1}}>Skills</Label>
                                <Col md={4}>
                                    <Control.select model=".skills" name="skills"
                                        className="form-control">
                                        <option>python</option>
                                        <option>Php</option>
                                        <option>React</option>
                                        <option>Magento</option>
                                    </Control.select>
                                </Col>
                            </Row>

   							<Row className="form-group">
                                <Label htmlFor="address" md={2}>Address</Label>
                                <Col md={10}>
                                    <Control.textarea rows="6" model=".address" id="address" name="address"
                                        placeholder="address"
                                        className="form-control"/>
   								</Col>
   							</Row>
   							<Row className="form-group">
                                <Col md={{size:10 , offset: 2}}>
                                    <Button type="submit" color="info"><span className="fa fa-check fa-lg"></span> Add Attributes</Button>
                                </Col>
                            </Row>
   						</Form> 
	          		</ModalBody>
	          	</Modal>
			</div>


			

		);
	}
}

export default Python_postform;