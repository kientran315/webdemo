const http = require('http')
const fs = require('fs') //fs:file system
const server = http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        //case 1: read file error
        if(err){
            console.log("read file error")
            console.error(err)
        }
        //case 2:read file succeed
        else{
            res.write(data)
            res.end()
        }

    })
})
server.listen(3000,()=>{
    console.log('http://localhost:3000');
})