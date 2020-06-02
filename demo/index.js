const http = require("http");
const url = require("url");
const path = require("path");

let cssExt = new Array(".css");

Array.prototype.contain = function (obj) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === obj) return true
  }
  return false
};

const requestHandels = require("./requestHandlers");

function handelHttp(request, response) {
  const pathname = url.parse(request.url).pathname; // 获取请求的URL

  if (typeof requestHandels.handle[pathname] === "function") {
    requestHandels.handle[pathname](request, response);
  } else if (typeConfirm(cssExt, request.url)) {
    requestHandels.getCSS(request, response, pathname)
  } else {
    console.log("No Request handler found for " + pathname);
    response.writeHead(404, {
      "Content-Type": "text/html;charset=utf-8"
    });
    response.write("Not Found");
    response.end()
  }
}

http.createServer().listen(3003);

function typeConfirm(type, url) {
  const ext = path.extname(path.basename(url));
  return type.contain(ext);

}
