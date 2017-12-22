/*
 * @Author			jssoscar
 * @Date			2017-12-23 00:02:32
 * @Version			1.0
 * @Description
 */

import React, {PureComponent} from 'react'
import {Spin} from 'antd'

const asyncComponent = loadComponent => (class AsyncComponent extends PureComponent {
    state = {
        Component: null,
        loading : false
    }

    componentWillMount() {
        if (this.componentLoaded()) {
            return;
        }

        this.setState({
            loading : true
        }, () => {
            loadComponent().then(({default : Component}) => {
                this.setState({
                    Component,
                    loading : false
                });
            }).catch((err) => {
                this.setState({
                    loading : false
                });
                console.error('组件加载失败！');
                throw err;
            });
        });
    }

    componentWillUnmount() {
        this.setState({Component: null});
    }

    componentLoaded = () => {
        return !!this.state.Component;
    }

    render() {
        const {state} = this;
        const {Component} = state;
        
        return Component
            ? <Spin spinning={state.loading} size="large">
                <Component {...this.props}/>
            </Spin>
            : null;
    }
});

export default asyncComponent;