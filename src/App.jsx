import React from 'react'

import { Helmet } from 'react-helmet'
import { Router } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import router from './router/index'

const { Header, Content, Footer } = Layout
const history = createBrowserHistory()

export default () => {
  return (
    <>
      <Helmet title="起飞啦" />
      <Router history={history}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/test">测试</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/help">说明文档</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              {router()}
            </div>
          </Content>
        </Layout>
      </Router>
    </>
  )
}
