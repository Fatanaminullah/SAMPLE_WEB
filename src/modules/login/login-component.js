import React, {Component, Fragment} from 'react'
import { Row, Col } from 'antd'
import '../../assets/css/login.css'
import LoginForm from './login-form'




class LoginComponent extends Component {
    render(){
        const { onSubmit, actionButtonSubmit } = this.props
        return(
            <Fragment>
                <Row  className="login-page" >
                    <Col align="center">
                        <LoginForm 
                            onSubmit={onSubmit}
                            actionButtonSubmit={actionButtonSubmit}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default LoginComponent