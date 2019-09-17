import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

class LayoutSider extends Component {
  render() {
    return (
      <React.Fragment>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
          theme="light"
        >
          <div className="logo">
            <img
              alt="foto profile"
              src={require("../../../assets/images/icon-login.png")}
              className="rounded-circle profile-picture mx-1"
            />
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys="dashboard">
            <Menu.Item key="dashboard">
              <Link to="/dashboard"> 
                <Icon type="home" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="info-desa">
              <Link to="/info-desa">
                <Icon type="info" />
                <span>Info Desa</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="kependudukan">
                <Link to="/kependudukan">
                  <Icon type="upload" />
                  <span>Kependudukan</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="statistik">
              <Link to="/statistik">
                <Icon type="chart" />
                <span>Statistik</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="layanan-surat">
              <Link to="/layanan-surat">
                <Icon type="message" />
                <span>Layanan Surat</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </React.Fragment>
    );
  }
}

export default LayoutSider;
