/*
 * @Author			jssoscar
 * @Date			2017-12-29 15:41:00 
 * @Version			1.0 
 * @Description	
 */

import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

@inject('userStore')
@observer
class Header extends Component {
    render() {
        return <div className="header">
            <div className="logo">
            </div>
            <div className="userCenter">
            </div>
        </div>
    }
}

export default Header;