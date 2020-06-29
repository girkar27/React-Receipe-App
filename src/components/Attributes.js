import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import { Link } from 'react-router-dom';




class Attributes extends Component{
	constructor(props){
		super(props);

		this.formsubmit= this.formsubmit.bind(this);
	}


	formsubmit(values) {

        this.props.postEmployee( values.name, values.designation, values.age, values.skills, values.featured);
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Entry Added to the server:  ' + JSON.stringify(values));
        this.props.reset_put_api_form(); 	
        // event.preventDefault();
	}

	render(){

	    // const errors = this.validate(this.state.firstname, this.state.lastname);   
	    return(
 	
	        <div className="container">
	        	<div className="row">
	                <Breadcrumb>
	                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>Attributes</BreadcrumbItem>
	                </Breadcrumb>                
	            </div>

	            <div className="row row-content">
                   <div className="col-12">
                      	<h3>Attributes Form</h3>
                   </div>
                   <div className="col-12 col-md-8">
                        <Form model="attributes" onSubmit= { (values) => this.formsubmit(values) }>
                            <Row className="form-group">
                                <Label htmlFor="skill1" md={2}>Full Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="full name"
                                        className="form-control"/>
   								              </Col>
   							            </Row>

   							            <Row className="form-group">
                                <Label htmlFor="skill1" md={2}>Designation</Label>
                                <Col md={10}>
                                    <Control.text model=".designation" id="designation" name="designation"
                                        placeholder="designation"
                                        className="form-control"/>
   								</Col>
   							</Row>

   							<Row className="form-group">
                                <Label htmlFor="name" md={2}>Age</Label>
                                <Col md={10}>
                                    <Control.text model=".age" id="age" name="age"
                                        placeholder="Age"
                                        className="form-control"/>
   								</Col>
   							</Row>

   							<Row className="form-group">
   								<Label htmlFor="name" md={2}>Skills</Label>
                                <Col md={4}>
                                    <Control.select model=".skills" name="skills"
                                        className="form-control">
                                        <option>python</option>
                                        <option>Php</option>
                                        <option>React</option>
                                        <option>Magento</option>
                                    </Control.select>
                                </Col>
                                <Col md={{size: 2, offset: 4}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".featured" name="featured"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>featured?</strong>
                                        </Label>
                                    </div>
                                </Col>
                            </Row>


   							<Row className="form-group">
                                <Col md={{size:10 , offset: 2}}>
                                    <Button type="submit" color="primary"><span className="fa fa-check fa-lg"></span> Add Attributes</Button>
                                </Col>
                            </Row>
   						</Form>
   					</div>		                           	
                </div>	

	        </div>

		);

	}

}


export default Attributes;