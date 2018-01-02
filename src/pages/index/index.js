/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import { Layout} from 'antd';
import {observable} from 'mobx'
import {get} from 'src/http'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'

@inject('userStore')
@observer
class App extends Component {

  @observable collapsed = false;

  componentWillMount() {
    get('/common/menu').then(result => {
      console.log('result', result);
    })
  }

  render() {
    const {props} = this;


    return <Layout.Header style={{padding: '0 0'}}>
        <Header {...props} />
        <Menu {...props} />
        <Content {...props} />
        <Footer />
    </Layout.Header>
  }
}

export default App;