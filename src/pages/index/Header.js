/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32
 * @Version			1.0
 * @Description
 */

import React, {Component} from 'react';
import {Icon, Avatar, Dropdown, Menu} from 'antd';

const MenuItem = Menu.Item;

class App extends Component {

    render() {
        const {props} = this, {userStore} = props;

        const menu = <Menu selectedKeys={[]}>
            <MenuItem disabled><Icon type="user"/>个人中心</MenuItem>
            <MenuItem disabled><Icon type="setting"/>设置</MenuItem>
            <Menu.Divider/>
            <MenuItem key="logout" className="menu">
                <Icon type="logout"/>退出登录
            </MenuItem>
        </Menu>

        return <div className="header">
            <div className="logo"></div>
            <div className="notice">
                <Icon type="bell"/>
                <Dropdown overlay={menu}>
                    <span className="acount">
                        <Avatar className="avatar" src={userStore.avatar}/> {userStore.username}
                    </span>
                </Dropdown>
            </div>
        </div>
    }
}

export default App;