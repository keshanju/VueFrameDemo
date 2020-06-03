const fs = require('fs');
const request = require("request");
const path = require("path")

// 创建文件夹目录
const staticFontDir = path.join(__dirname, "font");
if(!fs.existsSync(staticFontDir)) {
  fs.mkdirSync(staticFontDir);
  console.log("文件夹创建成功");
} else {
  console.log("文件夹已存在");
}

async function init(body, pg, mo) {
  console.log('开始读取');
  let cssCon = await fs.readFileSync('./css/Roboto.css', { encoding: 'UTF-8' });
  let cssList = cssCon.split('src:');
  let urlList = [];
  cssList.map((item) => {
    if (item.includes('url')) {
      const matchReg = /http.*?\.woff2/gi;
      let url = item.match(matchReg);
      if (url) {
        urlList.push(url.toString());
      }
    }
  })
  for (let i = 0; i < urlList.length; i++) {
    let url = urlList[i]
    downloadFontFile(url, '')
  }
  // new Promise((resolve, reject) => {
  //   request('http://www.google.com', function (error, response, body) {
  //     if (!error && response.statusCode === 200) {
  //       console.log('打印', body);
  //     } else {
  //       console.log("请求失败，网络错误")
  //     }
  //   });
  // })
  // fs.unlinkSync('./cssTrans.js');
  // fs.appendFileSync('./cssTrans.js', urlList);
  console.log('执行结束');
}
function downloadFontFile(url, filename) {
  console.log("start...")
  return new Promise((resolve, reject) => {
    request({url: url}, function (error, response, body) {
      // 将获取的字体资源存取到本地
      if (!error && response.statusCode === 200) {
        let stream = fs.createWriteStream(path.join(staticFontDir, filename));
        console.log("12")
        request(url).pipe(stream).on("close", (err) => {
          resolve("Success Download!")
        })
      } else {
        console.log("21")
        if(error) {
          reject(error)
        } else {
          reject(new Error("请求失败，网络错误！！！"))
        }
      }
    });
  })
}
//执行
init();