const crypto=require('crypto')
const needCrypto='诚诚是笨蛋'
const hh=crypto.createHash('sha1',needCrypto).update('瑶瑶也是').digest('hex')

const yy=crypto.createHash('sha1').update(needCrypto).digest('hex')

console.log(hh,yy)
// 打印:
//   11400c1a9a8c6176bc4ef14038872cc9615ba102
//   e60e676db18b09b69e476d8a00cd7884cb269cd4