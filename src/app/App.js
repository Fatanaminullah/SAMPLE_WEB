import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import LoginPage from './login-page/login-page'
import LayoutTemplate from '../common/layout/container/layout-template'
import 'antd/dist/antd.css';
import DashboardPage from './dashboard-page/dashboard-page';
import KependudukanPage from './kependudukan/kependudukan-page';
import LayananSuratPage from './layanan-surat/layanan-surat-page';
import InfoDesaPage from './info-desa-page/info-desa-page';
import StatistikPage from './statistik/statistik-page';

class App extends Component {
  render() {
    const { location } = this.props
    return (
      <Switch location={location}>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <LayoutTemplate
          childComponent={
            <Switch location={location}>
              <Route path="/dashboard" exact component={DashboardPage} />
              <Route path="/kependudukan" exact component={KependudukanPage} />
              <Route path="/layanan-surat" exact component={LayananSuratPage} />
              <Route path="/info-desa" exact component={InfoDesaPage} />
              <Route path="/statistik" exact component={StatistikPage} />
            </Switch>
          }
        >
        </LayoutTemplate>
      </Switch>
    )
  }
}

export default App