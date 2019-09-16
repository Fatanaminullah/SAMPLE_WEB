import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getFormValues} from 'redux-form';
import { actionButtonSubmit } from '../../common/store/action/general-action'
import LoginComponent from '../../modules/login/login-component'



class LoginPage extends Component {
    onSubmit = request => {
        console.log(request);
    }
    render(){
        console.log('login-form', this.props.formValues);
        
        return(
            <LoginComponent 
                onSubmit={this.onSubmit}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    formValues: getFormValues('loginForm')(state)
});
  
const mapDispatchToProps = (dispatch => ({
    actionButtonSubmit,
}))();

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)