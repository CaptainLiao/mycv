var fs = require(`fs`)
//var source = fs.readFileSync(`../buffer/logo_buffer.png`)
//
//fs.writeFileSync(`stream_copy_log.png`, source);
var readStream = fs.createReadStream(`stream_copy_logo.js`)
readStream
    .on(`data`, function(chunk) {
        console.log(`data emit`)
        console.log(Buffer.isBuffer(chunk))
        console.log(chunk.toString())
    })
    .on(`readable`, function() {
        console.log(`data readable`)
    })
    .on(`end`, function(){
        console.log(`data ends`)
    })
    .on(`close`, function(){
        console.log(`data close`)
    })
    .on(`error`, function (e) {
        console.log(`data read error` + e)
    })

















