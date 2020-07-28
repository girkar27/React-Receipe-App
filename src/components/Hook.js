import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import { Control, Form } from 'react-redux-form';



function Hook(){

	const initial_value = false
	const[closed_form, open_form] = useState(initial_value)

	const form1 = () =>{
		open_form(!closed_form)
	}

	const formsubmit = (values)=>{
		alert('Entry Added to the server:  ' + JSON.stringify(values));
	}


	return(
		<div>
		<div>
			<Button color="danger" onClick = {form1} className="mx-3">
			<span className="fa fa-arrow-down"></span>Hook</Button>
		</div>
		<Modal isOpen ={closed_form} toggle={ form1 }>
			<ModalHeader toggle= { form1 }>Add Entry</ModalHeader>
				<ModalBody>
				<Form model="python_post_api" onSubmit= { (values) => formsubmit(values) }>
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

export default Hook;