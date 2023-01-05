const anyHTTP = require('http')
const fs = require("fs")
const anyPort = 3000

const anyServer = anyHTTP.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("index.html", function(error, data) {
        if(error) {
            response.writeHead(404)
            response.write("Error: File Not Found")
        } else {
            response.write(data)
        }
        response.end
    })
})

anyServer.listen(anyPort, function(error) {
    if(error) {
        console.log("something went wrong", error)
    } else {
        console.log("Server is listening on port: " + anyPort)
    }
})