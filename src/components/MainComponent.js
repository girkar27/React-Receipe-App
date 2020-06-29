import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import ContactPerson from './ContactPersonComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent'; 
import Attributes from './Attributes'; 

import Header from './HeaderComponent';
import Logout from './Logout';
import Footer from './FooterComponent';
import RenderCommentCard from './Comments';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postEmployee, fetchEmp } from '../redux/ActionCreators';
import { fetchApi, post_api, put_api, delete_api } from '../redux/Api_actioncreators';
// import * as ActionTypes from '../redux/ActionTypes'; 
import { actions } from 'react-redux-form';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import React, { useEffect } from 'react';


import Display_api_data from './Display_database'; 
import Update_database_form from './Update_database'; 
import Delete_database_form from './PY_Delete_database'; 




const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,// from redux/configstore //methods and states from reducers available
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    employees: state.employees,
    api: state.api
  }
}


const mapDispatchToProps = (dispatch) => ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes:() => { dispatch(fetchDishes()) },
  fetchComments:() => { dispatch(fetchComments()) },
  fetchPromos:() => { dispatch(fetchPromos()) },
  fetchEmp:() => { dispatch(fetchEmp()) },
  fetchApi:() => { dispatch(fetchApi()) },
  postEmployee: (name, designation, age, skills, featured) => dispatch(postEmployee(name, designation, age, skills, featured)),
  post_api: (firstname, lastname, age, skills, address) => dispatch(post_api(firstname, lastname, age, skills, address)),
  put_api: (id, firstname, lastname, age, skills, address) => dispatch(put_api(id, firstname, lastname, age, skills, address)),
  delete_api: (id) => dispatch(delete_api(id)),
  resetFeedbackForm:() => { dispatch(actions.reset('attributes'))}, 
  reset_post_api_form:() => { dispatch(actions.reset('python_post_api'))},
  reset_put_api_form:() => { dispatch(actions.reset('python_put_api'))}
  // fetchLeaders:() => { dispatch(fetchLeaders()) },
});
  

  



class Main extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchDishes();  //data from json server
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchEmp();
    this.props.fetchApi();
    // this.props.postEmployee();
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
          leader = {this.props.leaders.filter((leader)=>leader.featured)[0]}
        
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

          postComment={this.props.postComment} />
      );  
    }

    const CommentCard = () =>{
      return(
        <RenderCommentCard comments_main = {this.props.comments.comments} 
          employees = { this.props.employees.employees }
          api = {this.props.api.api} />
      );  

    }


    const Database_display = ({ match }) =>{
      return(
        <Display_api_data api = {this.props.api.api.filter((api)=> api.id === parseInt(match.params.user_id,10))[0]} />       
      );
    }

    const Database_update = ({ match }) =>{
      return(
        <Update_database_form api = {this.props.api.api.filter((api)=> api.id === parseInt(match.params.user_id,10))[0]}
          put_api = {this.props.put_api} 
          reset_put_api_form =  {this.props.reset_put_api_form} />       
      );
    }


    const Database_delete = ({ match }) =>{
      return(
        <Delete_database_form delete_api = {this.props.delete_api}
          api = {this.props.api.api.filter((api)=> api.id === parseInt(match.params.user_id,10))[0]} />       
      );
    }



    return (
      <div className="App">
        <Header post_api= {this.props.post_api} reset_post_api_form= {this.props.reset_post_api_form} />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                <Route path ='/menu/:dishId' component={ DishWithId } />
                <Route path='/home' component={ Homepage } />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                <Route exact path='/contactus' component={ Contact } />
                <Route exact path='/contactperson' component= {ContactPerson}   />
                <Route exact path='/commentcard' component={ CommentCard } />
                <Route exact path='/logout' component={ Logout } />
                <Route exact path='/attributes' component={() => <Attributes postEmployee= {this.props.postEmployee}  resetFeedbackForm= {this.props.resetFeedbackForm}/>  } />
                <Route path='/display_user/:user_id' component={ Database_display } />
                <Route path='/update_user/:user_id' component={ Database_update } />
                <Route path='/delete_user/:user_id' component={ Database_delete } />

              </Switch>
            </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}
        
          
                
        


     
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


 