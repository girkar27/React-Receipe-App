import React, { Component } from 'react';	
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, Breadcrumb, BreadcrumbItem, Col, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';

function CommentCard({ comment }){
 	return(
 		<Card className=" mb-3 ">   
			<CardHeader className="bg-secondary text-white">Author: {comment.author}</CardHeader>
			<CardBody>
      	    	<CardText>Comment : {comment.comment} </CardText>
      	    	<CardText>Rating : {comment.rating} </CardText>
			</CardBody>
	    </Card>
	   
 	);

}



function Employees({ emp }){
	return(
 		<Card className=" mb-3 ">   
			<CardHeader className="bg-primary text-white">Candidate Name: {emp.name}</CardHeader>
			<CardBody>
      	    	<CardText><strong>Age:</strong> {emp.age} </CardText>
      	    	<CardText><strong>skills:</strong> {emp.skills} </CardText>
			</CardBody>
	    </Card>
	   
 	);
}

function Python_data({ api }){
	return(
 		<Card className=" mb-3 ">   
			<CardHeader className="bg-primary text-white">FLASK API DATA</CardHeader>
			<CardBody>
      	    	<CardText><strong>ID:</strong> {api.id}</CardText>
      	    	<CardText><strong>Firstname:</strong> {api.firstname} </CardText>
      	    	<CardText><strong>Lastname:</strong> {api.lastname} </CardText>
			</CardBody>
	    </Card>
	   
 	);
}


function RenderCommentCard(props){
	const comment1 = props.comments_main.map((comment)=>{
		return(

			<CommentCard comment = { comment } />

		);
		
	});

	const emp1 = props.employees.map((emp)=>{
		return(
			<Employees emp={ emp } />
		);
	});

	const add_api = props.api.map((api1)=>{
		return(
			<Python_data api={ api1 } />
			// console.log(api1)
		);
	});
			

	return(
		<div className="container">
		<div className= "col-12, col-sm-3">
			<Breadcrumb>
	            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> 
	            <BreadcrumbItem active>Comments</BreadcrumbItem>
	        </Breadcrumb>
	  	</div>

			<div className="row">
				<div className="col-12 col-md-4">
					<h3>Comments</h3>
						{comment1}
				</div>
				<div className="col-12 col-md-4">
					<h3>Employees Details</h3>
						{ emp1 }
				</div>
				<div className="col-12 col-md-4">
					<h3>Python Details</h3>
						{add_api}
				</div>		
				
			</div>
		</div>

	);

} 

		
		
		



export default RenderCommentCard;

