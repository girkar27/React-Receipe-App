import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errMess }){

    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess){
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>  
                    <CardImg src={ baseUrl + item.image }  alt={ item.name } />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    { item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{ item.description }</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );    
}


function RenderLeader({ leader }){
    return(
        <Card>  
            <CardImg src={ leader.image }  alt={ leader.name } />
            <CardBody>
                <CardTitle>{leader.name}</CardTitle>
                    { leader.designation ? <CardSubtitle>{leader.designation}</CardSubtitle> : null }
                <CardText>{ leader.description }</CardText>
            </CardBody>
        </Card>

    );
}


function Home(props){

    // if (props.dishes.dishesLoading) {
    //     return(
    //         <Loading />
    //     );
    // }
    // else if (props.dishesErrMess) {
    //     return(
    //         <h4>{props.dishes.errMess}</h4>
    //     );
    // }
    // else 
    return(
        <div className= "container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} 
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderLeader leader = {props.leader}
                    />
                </div>  
            </div>
        </div>
    );
}

export default Home;