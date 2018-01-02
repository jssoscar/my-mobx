/*
 * @Author			jssoscar
 * @Date			2018-01-02 18:50:53 
 * @Version			1.0 
 * @Description	
 */

const request = require('request');

const proxy = (url, req, res, next) => {
    var iReq = request(url);

    req.pipe(iReq);

    iReq.pipe(res);

    iReq.on('error', error => {
        if (!error) {
            return;
        }
        console.error(error);
        let errorText = error.message;
        res.statusMessage = errorText;
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write(errorText);
        res.end();
        console.log(url, '-------------error-----------');
    });
}

module.exports = proxy;