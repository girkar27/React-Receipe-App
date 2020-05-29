import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Col, Input, FormFeedback, Modal, ModalHeader, ModalBody } from 'reactstrap';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



class CommentForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			isFormOpen: false
		};

		this.openForm = this.openForm.bind(this);
		this.handleForm= this.handleForm.bind(this);
	}

	openForm(){
    	this.setState({
      	isFormOpen: !this.state.isFormOpen

    	});
    }
 
    handleForm(event){
    	this.openForm();
	    alert("Username: " + this.username.value + " Rating: " + this.rating.value
      		+ " Comments: " + this.comment.value);
	    event.preventDefault();
    }


	render(){
		return(
		

			<div>
				<div className="col-5 offset-sm-2">
				
			        <Button type="submit" color="primary" onClick={ this.openForm }>
				        <span className="fa fa-pencil"></span>{' '}
				        	Edit Comment 
			        </Button>
	            </div>
	           	<Modal isOpen ={this.state.isFormOpen} toggle={ this.openForm }>
	            	<ModalHeader toggle={ this.openForm } >Submit Comment</ModalHeader>
	          	<ModalBody>
	          
		            <Form onSubmit = { this.handleForm }>
			            <FormGroup>
			            	<Label className="col-sm-2" htmlFor="username">
			            	<strong>Username:</strong></Label>
			            	<div className="col-sm-12">
			            	<Input type="text" id="username" name="username"
			            		innerRef={(input) => this.username = input}	 />
			            	</div>
			            </FormGroup>

			            <FormGroup>
			            	<Label htmlFor="rating">Rating:</Label>
			            	<Input type="select" id="rating" name="rating"
			            		innerRef={(input) => this.rating = input}>
			            		<option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Input>
			            </FormGroup>

			            <FormGroup row>
				            <Col>
				            	<Label htmlFor="comment">Comments:</Label>
				            	<Input rows="6" type="textarea" id="comment" name="comment"
				            		innerRef={(input) => this.comment = input} />
				            </Col>
			            </FormGroup>
			            <FormGroup row>
                            <Col md={{size: 10}}>
	                            <Button type="submit" color="primary">
	                            	Submit
	                            </Button>
                            </Col>
                        </FormGroup>
			       	</Form>
			  		
		       	</ModalBody>
		       	</Modal>
		    </div>

		  
		);

	}

}
	
		    	






			       
			        


export default CommentForm;