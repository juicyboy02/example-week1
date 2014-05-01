var http = require("http");
var port = 1337;
var request = require("request");
var url = "http://graph.facebook.com/hypebeast/photos?type=uploaded";

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  
  var data = "<html><head><title>hypebeast</title><link rel='stylesheet' href='mystyle.css'></head><body>"
  data += "<div id='wrapper'><div id='columns'>"
  request.get(url, function (err, body, response) {

    response = JSON.parse(response);
    response.data.forEach(function (val, idx) {
      data += "<div class='pin'><img src='" + val.images[2].source + "'></div>";
    });
    
    data += "</div></div></body></html>";
    res.end(data);
  });

}).listen(port);

console.log("start server port: " + port);