import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import { Link } from 'react-router-dom';




class Update_database_form extends Component{
	constructor(props){
		super(props);

		this.formsubmit= this.formsubmit.bind(this);
	}


	formsubmit(values) {
        this.props.put_api(this.props.api.id, values.firstname, values.lastname, values.age, values.skills, values.address)
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Entry Updated to the server:  ' + JSON.stringify(values)); 	
        this.props.reset_put_api_form()
	}

	render(){

	    // const errors = this.validate(this.state.firstname, this.state.lastname);   
	    return(
 	
	        <div className="container">
	        	<div className="row">
	                <Breadcrumb>
	                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>Update Database</BreadcrumbItem>
	                </Breadcrumb>                
	            </div>

	            <div className="row row-content">
                   <div className="col-12">
                      	<h3>Update_database_</h3>
                   </div>
                   <div className="col-12 col-md-8">
                        <Form model="python_put_api" onSubmit= { (values) => this.formsubmit(values) }>
                            <Row className="form-group">
                                <Label htmlFor="id" md={2}>ID:</Label>
                                <Col md={2}>
                                    <Control.text model=".id" id="id" name="id"
                                        placeholder="user_id"
                                        value = { this.props.api.id } 
                                        disabled
                                        className="form-control"/>
   								</Col>
   							</Row>
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
             		</div>		                           	
                </div>	
	        </div>
		);

	}

}




export default Update_database_form;