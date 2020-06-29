import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, Breadcrumb, BreadcrumbItem, Col, Button } from 'reactstrap';


const Display_api_data =( props )=> {
	return(
		<div className="col-12 col-sm-8">
		<div className="offset-3">	
		<Card>
			<CardHeader className="bg-secondary text-white"><strong>Details: </strong></CardHeader>
			<CardBody>
      	    	<CardText><strong>Firstname:</strong>{props.api.firstname}</CardText>
      	    	<CardText><strong>LastName:</strong>{ props.api.lastname }</CardText>
      	    	<CardText><strong>Age:</strong>{ props.api.age }</CardText>
      	    	<CardText><strong>ID:</strong>{ props.api.id }</CardText>
			</CardBody>
	    </Card>
	    </div>
		</div>

		
	);
}

export default Display_api_data;	
