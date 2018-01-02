/*
 * @Author			jishengsheng
 * @Date			2018-01-02 15:34:15
 * @Version			1.0
 * @Description
 */

const fs = require('fs');

const vm = require('vm');

const path = require('path');

const getMockContent = () => {
    let mockContent = fs.readFileSync(path.resolve(process.cwd(), 'mock/index.js'));

    if (!mockContent) {
        console.log(`mock file is null`);
        return [];
    }

    let rules = [];

    try {
        let sandbox = {
            module: {
                exports: {}
            }
        };

        vm.runInNewContext(mockContent, sandbox);

        rules = sandbox.module.exports.rules;
    } catch (e) {
        console.log("mock配置文件出错 ", e);
    }

    return rules;
};

module.exports = getMockContent;