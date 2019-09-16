import React from "react";
import { Field, reduxForm } from "redux-form";
import { Row, Col } from "antd";
import * as validation from '../../common/utils/validation/validation'
import { renderField } from "../../common/general-components/input-field";
import { SubmitButton } from "../../common/general-components/submit-button";

const loginIcon = require('../../assets/images/icon-login.png')



const LoginForm = props => {
  return (
    <form id="login-form" className="login-form">
      <Row>
        <img alt="login-icon" src={loginIcon} className="login-icon" />
      </Row>
      <Row>
          <Col className="login-form-label">
              <span>Welcome Back!</span>
          </Col>
      </Row>
      <Row>
        <Col span={24} align="center">
        <Field
            name="username"
            component={renderField}
            validate={[validation.required]}
            className="login-input username"
            type="text"
            placeholder="Username"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} align="center">
        <Field
            name="password"
            component={renderField}
            validate={[validation.required]}
            className="login-input password"
            type="text"
            placeholder="Password"
          />
        </Col>
      </Row>
      <Row>
          <Col span={24}>
              <SubmitButton 
                  label="Login"
              />
          </Col>
      </Row>
    </form>
  );
};

export default reduxForm({
    form: 'LoginForm'
  })(LoginForm)
