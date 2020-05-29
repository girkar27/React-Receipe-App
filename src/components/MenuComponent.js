import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DISHES } from '../shared/dishes'; 
import { Link } from 'react-router-dom';

function RenderMenuitem({ dish , onClick}){
  return (
    <Card>
      <Link to={`/menu/${dish.id}`} > 
      <CardImg width="100%" src={dish.image} alt={dish.name} />   
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu =(props)=>{

  const menu = props.dish1.map((dish)=>{
    return(
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuitem dish={dish}/>
      </div> 
    );

  });



  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> 
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}
 

export default Menu;