import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, Breadcrumb, BreadcrumbItem, Col, Button } from 'reactstrap';
 

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






function RenderCommentCard(props){

	const comment1 = props.comments_main.map((comment)=>{
		return(
			
				<CommentCard comment = { comment }/>
			
		);
		
	});

	return(
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-7">
				
					{comment1}
				</div>		


			</div>

		</div>
		
		
		
	);
} 



export default RenderCommentCard;

