import React from 'react';
import { Card, CardImg, CardText, CardBody, CardImgOverlay, CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';


function Logout(){
		return(
			<div className="container">
				<div className="col-12 col-md-5 offset-3">	
				<Card>
					<CardImg src="assets/images/logo.png" />
					<CardBody className="col-12 offset-4">
						<p><strong>Logged Out :)</strong></p>
					</CardBody>
				</Card>
				</div>
			</div> 	

		);

}
	


	


	



export default Logout;



