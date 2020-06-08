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



function Promotions({ promos }){
	return(
		<div>
		<h3>Promotions</h3>
		<Card className=" mb-3 ">   
			<CardHeader className="bg-primary text-white">Name: {promos.name}</CardHeader>
			<CardImg width="100%" src={baseUrl + promos.image} alt={promos.name} />
			
			<CardBody>
      	    	<CardText>price : {promos.price} </CardText>
      	    	<CardText>Label : {promos.description} </CardText>
			</CardBody>
	    </Card>
	    </div>
	);
}

function RenderCommentCard(props){
	const comment1 = props.comments_main.map((comment)=>{
		return(

			<CommentCard comment = { comment } />
		);
		
	});

	const promo1 = props.promotions.map((promos)=>{
		return(
			<Promotions promos={ promos } />
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
				<div className="col-12 col-md-7">
					<h3>Comments</h3>
						{comment1}
				</div>
				<div className="col-12 col-md-4">
					{ promo1 }
				</div>		
				
			</div>
		</div>

	);

} 

		
		
		



export default RenderCommentCard;

