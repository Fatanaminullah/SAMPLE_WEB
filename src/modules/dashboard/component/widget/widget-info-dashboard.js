import React, { Component } from "react";
import { Row, Col, Icon } from "antd";

class WidgetInfoDashboard extends Component {
  render() {
    const { color, value, description, icon} = this.props;
    return (
      <div className={`dashboard-item-widget ${color}`}>
        <Row style={{ height: '75%' }}>
          <Col span={12}>
            <Row className="dashboard-item-value">
              <Col span={24}>{value}</Col>
            </Row>
            <Row className="dashboard-item-description">
              <Col span={24}>{description}</Col>
            </Row>
          </Col>
          <Col span={12} align="right">
              <img 
                alt="icon" 
                src={require(`../../../../assets/images/${icon}.png`)} 
                className="icon-widget"
                />
          </Col>
        </Row>
        <Row className="dashboard-item-widget-button">
          <span>
            Lihat Detail <Icon type="arrow-right" />{" "}
          </span>
        </Row>
      </div>
    );
  }
}

export default WidgetInfoDashboard;
