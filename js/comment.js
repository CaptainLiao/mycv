var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': 'scott 大法好。。。',
    'mid': '11548'
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=c202b801-cad6-45bc-b099-5a6a488cc651; imooc_isnew_ct=1460815563; loginstate=1; apsid=NlYTQ4ZWVjOGUxOTlmZGZmYTliZmEyOTNhMWE1YjcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzAzOTI4OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMzI2NjU4Njc0M0AxNjMuY29tAAAAAAAAAAAAAAAAAGIzZmNhMjI1NTJkNDlmMzJiNGJmZjhjZmQ4OWNjMTY594YYWPeGGFg%3DMj; last_login_username=13266586743%40163.com; PHPSESSID=rj4k6bb9mnq2eqepqjftpmldv2; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1478002390,1479798140; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1479798238; imooc_isnew=2; cvde=5833ed69a6ef9-7',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}
var req = http.request(options,(res) => {
    console.log(`Status: `+ res.statusCode)
    console.log(`Res: `+ res);
    console.log(`Headers: `+ JSON.stringify(res.headers))
    res.setEncoding(`utf8`)
    res.on(`data`, (chunk) => {
        console.log(typeof chunk);
    });
    res.on(`end`, () => {
        console.log(`Mission complete`);
    });
})

req.on(`error`, (e) => {
    console.log(`出错啦： `+ e.message);
});

req.write(postData);

req.end();















