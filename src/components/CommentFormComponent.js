import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Col, Input, FormFeedback, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/ActionCreators';


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
 
    handleForm(values) {
    	this.openForm();
    	// console.log('Current State is: ' + JSON.stringify(values));
     //    alert('Current State is: ' + JSON.stringify(values));
	    this.props.addComment ( this.props.dishId, values.rating, values.author, values.comment);
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
	          
		            <LocalForm onSubmit = { (values) => this.handleForm(values) }>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}><strong>Author</strong></Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Author"
                                        className="form-control"  />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}><strong>Rating</strong></Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating"
                                     
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Control.select>

                                </Col>
                            </Row>


                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}><strong>Comment</strong></Label>
                                <Col md={10}>
                                    <Control.textarea rows="6" model=".comment" id="comment" name="comment"
                                        placeholder="comments"
                                        className="form-control"  />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                
                                <Col md={{size:10 , offset: 2}}>
                                    <Button type="submit" color="primary">Add Comment</Button>
                                </Col>
                            </Row>
                    </LocalForm>
		       	</ModalBody>
		       	</Modal>
		    </div>

		  
		);

	}

}
	
		    	






			       
			        


export default CommentForm;