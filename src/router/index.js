/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, {PureComponent} from 'react'
import {Route, Switch} from 'react-router'
import AsyncComponent from 'src/components/async'

const Index = AsyncComponent(() => import('src/pages/index'));
const Login = AsyncComponent(() => import('src/pages/login'));

class CustomerRouter extends PureComponent {
    render() {
        return <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/index" component={Index} />
        </Switch>
    }
}

export default CustomerRouter;