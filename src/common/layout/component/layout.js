import React from 'react';
import { Layout } from 'antd';
import LayoutSider from './sider';
import LayoutContent from './content';
import LayoutHeader from './header';

import '../../../assets/css/layout.css'

export default class BaseLayout extends React.Component {
    state = {
        collapsed: false
      };
    
      onCollapse = () => {
          this.setState({ collapsed: !this.state.collapsed })
      }
    render() {
        return (
            <React.Fragment>
                    <Layout style={{ height: "100%", width: "100%" }}>
                        <LayoutSider {...this.props} collapsed={this.state.collapsed} />
                        <Layout>
                            <LayoutHeader 
                                {...this.props} 
                                toggle={this.onCollapse} 
                                collapsed={this.state.collapsed} 
                                />
                            <LayoutContent {...this.props} />
                        </Layout>
                    </Layout>
            </React.Fragment>
        )
    }

}
