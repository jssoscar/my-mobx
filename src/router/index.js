/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, {PureComponent} from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router'
import AsyncComponent from 'src/components/async'

const Index = AsyncComponent(() => import('src/pages/index'));
const Login = AsyncComponent(() => import('src/pages/login'));
const NotFound = AsyncComponent(() => import('src/pages/404'));

class CustomerRouter extends PureComponent {
    render() {
        return <Switch>
            <Route exact path="/" render={() =><Redirect to="/login" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/index" component={Index} />
            <Route component={NotFound} />
        </Switch>
    }
}

export default withRouter(CustomerRouter);