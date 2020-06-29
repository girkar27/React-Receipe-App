import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Row, Col, Label } from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import { Link } from 'react-router-dom';




class Delete_database_form extends Component{
	constructor(props){
		super(props);

		this.formsubmit= this.formsubmit.bind(this);
	}


	formsubmit(values) {
        this.props.delete_api(this.props.api.id)
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Entry DELETED '); 	
        // this.props.reset_put_api_form()
	}

    Alertbox(){
        alert("Are you sure you wanna delete ?");
    }

	render(){

	    // const errors = this.validate(this.state.firstname, this.state.lastname);   
	    return(
 	
	        <div className="container">
	        	<div className="row">
	                <Breadcrumb>
	                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>Delete_entry</BreadcrumbItem>
	                </Breadcrumb>                
	            </div>

	            <div className="row row-content">
                   <div className="col-12">
                      	<h3>Delete_entry</h3>
                   </div>
                   <div className="col-12 col-md-8">
                        <Form model="python_delete_api" onSubmit= { (values) => this.formsubmit(values) }>
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
                                <Col md={{size:10 , offset: 2}}>
                                    <Button type="submit" onClick={ this.Alertbox }  color="danger"><span className="fa fa-trash fa-lg"></span> Delete</Button>
                                </Col>
                            </Row>
             			</Form>
             		</div>		                           	
                </div>	
	        </div>
		);

	}

}




export default Delete_database_form;