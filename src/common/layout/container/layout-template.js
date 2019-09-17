import React, { Component } from 'react';
import BaseLayout from '../component/layout';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;


class LayoutTemplate extends Component {
  
    render() {
      return (
        <React.Fragment>
          <BaseLayout {...this.props} />
        </React.Fragment>
      );
    }
} 

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch => ({
  
}))();

export default connect(mapStateToProps, mapDispatchToProps)(LayoutTemplate)
