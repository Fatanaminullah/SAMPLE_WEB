import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import '../../../../assets/css/dashboard.css'

class WidgetInfoPrice extends Component {
  render() {
    const { color, item, price, icon} = this.props;
    return (
      <div className={`dashboard-item-widget ${color}`}>
        <Row style={{ height: '75%', padding: '5vh' }}  className="widget-info-price">
          <Col span={10} align="left">
            <span > {item} </span>
          </Col>
          <Col span={10} align="left" >
            <span > Rp. {price} / Kg</span>
          </Col>
          <Col>
              <Icon
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

export default WidgetInfoPrice;
