/*
 * @Author			jishengsheng
 * @Date			2018-01-02 15:18:13
 * @Version			1.0
 * @Description
 */

const request = require('request');

const argv = require('yargs').argv;

const url = require('url');

const path = require('path');

const Mock = require('mockjs');

const getMock = require('./getMock');

const Proxy = require('./proxy');

const middleWare = (req, res, next) => {
    let url = req.url;

    // static resources
    if (/\.(css|js|png|jpg|gif|bmp|jpeg|html|tpl|map|swf|svg)(.+)?$/.test(url)) {
        next();
        return;
    }

    const shouldProxy = argv.proxy;

    // proxy
    if (!!shouldProxy) {
        const reqUrl = `http://${shouldProxy.replace('http://', '').replace(/\/$/, '')}${url}`;
        Proxy(reqUrl, res, req, next);
        return;
    }

    startMock(req, res, next);
};

const startMock = (req, res, next) => {
    const mockRules = getMock();

    const reqUrl = req.url;

    const urlObj = url.parse(reqUrl, true);

    // mock
    if (mockRules && mockRules.length) {
        let config = mockRules.find(data => {
            let pattern = typeof data.pattern === 'string' ? new RegExp(data.pattern, 'ig') : data.pattern;
            try {
                return pattern.test(reqUrl);
            } catch (e) {
                return false
            }
        });

        if (config) {
            const {
                response,
                sleep = 0
            } = config;

            const isJSONP = !!urlObj.query.callback;

            try {
                const mockData = Mock.mock(require(path.join(process.cwd(), '/mock', response)));

                // jsonp
                if (isJSONP) {
                    dealJSONP(urlObj.query.callback, res, mockData);
                } else {
                    dealAjax(res, mockData);
                }
            } catch (error) {
                const errData = {
                    errno: -9999999,
                    errmsg: error.message,
                    data: null
                }

                if (isJSONP) {
                    dealJSONP(urlObj.query.callback, res, errData);
                } else {
                    dealAjax(res, errData);
                }

                console.error('-------read mock response error---------', error);
            }

            setTimeout(() => res.end(), sleep * 1000);
        }
    }
};

const dealJSONP = (callback, res, data) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.write(`${callback}(${JSON.stringify(data)})`);
}

const dealAjax = (res, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
}

module.exports = {
    middleWare
};