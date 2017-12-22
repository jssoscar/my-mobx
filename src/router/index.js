/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:30:32 
 * @Version			1.0 
 * @Description	
 */

import React, {PureComponent} from 'react'
import {Route, Switch} from 'react-router'
import Index from '../pages/index'

class CustomerRouter extends PureComponent {
    render() {
        return <Switch>
            <Route exact path="/" component={Index}>
            </Route>
        </Switch>
    }
}

export default CustomerRouter;