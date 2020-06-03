import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Col, Button } from 'reactstrap';
// import { DISHES } from '../shared/dishes';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

  function RenderDish({dish}) {
    
     	return (
        <div className="col-12 col-md-5 m-1">
          <Card>
      	    <CardImg top src={ baseUrl + dish.image } alt={dish.name} />
      	    <CardBody>
      	      <CardTitle>{dish.name}</CardTitle>
      	    	<CardText>{dish.description}</CardText>
      	    </CardBody>
      	  </Card>
        </div>
    	); 	
  }



  function RenderComments({ comments, addComment, dishId }){
    if(comments !=null)
    // console.log(comments)
    return(
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) =>{
            return( 
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}</p>
              </li>
            
            );
          })}
        </ul>
        <CommentForm dishId={dishId} addcomment={addComment} />
      </div>
    );
  }


          
  

 

  function DishDetail(props){

    if (props.isLoading) {
      return(
        <div className="container">
          <div className="row">            
            <Loading />
          </div>
        </div>
      );
    }
    else if (props.errMess) {
      return(
        <div className="container">
          <div className="row">            
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    }
    else if (props.dish != null) 
    // console.log(props.dish)
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              
            </div>                
          </div>
          <div className="row">
            <RenderDish dish = {props.dish} />
            <RenderComments 
              comments = {props.comments}
              addComment ={props.addComment}
              dishId={props.dish.id}
                />
              
            
          </div>

        </div>
      );
            

    else
      return(
        <div></div>
      );
  }
   

export default DishDetail;
  