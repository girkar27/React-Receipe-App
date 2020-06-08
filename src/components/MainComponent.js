import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import ContactPerson from './ContactPersonComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent'; 

import Header from './HeaderComponent';
import Logout from './Logout';
import Footer from './FooterComponent';
import RenderCommentCard from './Comments';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';




const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,// from redux/configstore //methods and states from reducers available
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = (dispatch) => ({
  
  // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  fetchDishes:() => { dispatch(fetchDishes()) },
  fetchComments:() => { dispatch(fetchComments()) },
  fetchPromos:() => { dispatch(fetchPromos()) },
  // fetchLeaders:() => { dispatch(fetchLeaders()) }
  // resetFeedbackForm:() => { dispatch(actions.reset('feedback'))}
  
});

  



class Main extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchDishes();  //data from json server
    this.props.fetchComments();
    this.props.fetchPromos();
    // this.props.fetchLeaders();
  }


 
  render() {
    const Homepage = () => {
      return(
        <Home
          dish = {this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion ={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0]}
          promosLoading = {this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader ={this.props.leaders.filter((leader)=>leader.featured)[0]}
        
        />
      );  
    }

    const DishWithId = ( { match } ) =>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}  
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          // commenterrMess={this.props.comments.errMess}

          addComment={this.props.addComment} />
      );  
    }

    const CommentCard = () =>{
      return(
        <RenderCommentCard comments_main = {this.props.comments.comments} 
          promotions = { this.props.promotions.promotions } />
      );

    }


    return (
      <div className="App">
        <Header/>
        <Switch>

          <Route path ='/menu/:dishId' component={ DishWithId } />
          <Route path='/home' component={ Homepage } />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Route exact path='/contactus' component={ Contact } />
          <Route exact path='/contactperson' component= {ContactPerson}   />
          <Route exact path='/commentcard' component={ CommentCard } />
          <Route exact path='/logout' component={ Logout } />

          
        </Switch>
        <Footer/>
      </div>
     
    );
  }
}
        
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


 