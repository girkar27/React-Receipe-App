import React, { Component } from 'react';	
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, Breadcrumb, BreadcrumbItem, Col, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';


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
 		<Card className=" mb-2">    
			<CardHeader><strong>ID:</strong> {api.id}{'  -- '}{api.firstname}{' '}{api.lastname} 
      	    	<div  className="row">
					<div className= "col-12 col-sm-2">      	    	
					    <Link to={`/display_user/${api.id}`}>
				        <Button type="submit" color="info">
					        <span className="fa fa-pencil fa-sm"></span>{' '}
					        	View
				        </Button>
				        </Link>
			        </div>
      	    		

	      	    	<div className= "col-12 col-sm-2">
	      	    		<Link to={`/update_user/${api.id}`}>
				        <Button type="submit" color="secondary" onClick="">
					     	Update
				        </Button>
				        </Link>
	      	    	</div>
	      	    	<div className= "col-12 col-sm-2">
	      	    		<Link to={`/delete_user/${api.id}`}>
				        <Button type="submit" color="danger" onClick="">
					        <span className="fa fa-trash fa-sm"></span>Delete
				        </Button>
				        </Link>
	      	    	</div>
      	    	</div>
			</CardHeader>

	    </Card>
	   
 	);
}


function RenderCommentCard(props){

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
					<h3>Employees Details</h3>
						{ emp1 }
				</div>
				<div className="col-12 col-md-8">
					<h3>Python Details</h3>
						{add_api}
				</div>		
				
			</div>
		</div>

	);

} 

		
		
		



export default RenderCommentCard;

