import React, { Component, Fragment } from "react";
import { Row, Col } from "antd";
import WidgetInfoDashboard from "./widget/widget-info-dashboard";
import "../../../assets/css/dashboard.css";
import WidgetInfoPrice from "./widget/widget-info-price";

class DashboardComponent extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col xl={8} lg={8} md={12}>
            <WidgetInfoDashboard
              color="primary"
              value="1000"
              description="Penduduk"
              icon="penduduk-icon"
            />
          </Col>
          <Col xl={8} lg={8} md={12}>
            <WidgetInfoDashboard
              color="purple"
              value="100"
              description="Kepala Keluarga"
              icon="penduduk-icon"
            />
          </Col>
          <Col xl={8} lg={8} md={12}>
            <WidgetInfoDashboard
              color="warning"
              value="50"
              description="Wilayah Dusun"
              icon="penduduk-icon"
            />
          </Col>
          <Col xl={8} lg={8} md={12}>
            <WidgetInfoDashboard
              color="success"
              value="90"
              description="Surat Tercetak"
              icon="penduduk-icon"
            />
          </Col>
          <Col xl={16} lg={16} md={24}>
          <WidgetInfoPrice
              color="secondary"
              item="Telor"
              price="15,000"
              icon="penduduk-icon"
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default DashboardComponent;
