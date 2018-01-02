/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import { Layout, Icon, Dropdown, Avatar} from 'antd';
import {observable} from 'mobx'
import {get} from 'src/http'

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
    const {props} = this,
      {userStore} = props;


    return <Layout.Header style={{padding: '0 0'}}>
        <div className="header">
          <div className="logo">
          </div>
          <div className="notice">
            <Icon type="bell" />
              <span className="acount">
                <Avatar size="" className="avatar" src={userStore.avatar} />
                {userStore.name}
              </span>
          </div>
      </div>
    </Layout.Header>
  }
}

export default App;