let fs = require('fs');
async function init(body, pg, mo) {
  console.log('开始读取');
  let cssCon = await fs.readFileSync('./css/Roboto.css', { encoding: 'UTF-8' });
  let cssList = cssCon.split('src');
  let urlList = [];
  cssList.map((item) => {
    if (item.includes('url')) {
      console.log(item)
      var matchReg = /http.*?\.woff2/gi;
      var url = item.match(matchReg);
      if (url) {
        urlList.push(url);
      }
    } 
  })

  for(let i = 0; i < urlList.length; i++) {
    let url = urls[i]
    download(url)
  }

  // fs.unlinkSync('./cssTrans.js');
  // fs.appendFileSync('./cssTrans.js', urlList);
  console.log('执行结束');
}

const https = require("https");

function download(url) {
  https.get(url, function(res) {
    console.log(res)
  })
}

//执行
init();