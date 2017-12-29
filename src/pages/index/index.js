/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import Header from './Header'

@inject('userStore')
@observer
class App extends Component {
  render() {
    return <div>
        <Header />
      </div>
  }
}

export default App;