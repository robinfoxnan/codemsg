/**
 * Created by rd on 2017/5/4.
 */
// 加载核心加密库
var AES = require("cryptojs/aes");

var CryptoJS = require("cryptojs/crypto-js");
console.log(CryptoJS.HmacSHA1("Message", "Key"));

function encrypt(message, keyStr) {
  //var keyHex = CryptoJS.enc.Utf8.parse(key);
  var ciphertext = AES.encrypt(message, keyStr);
  return {
    key: keyStr,
    value: ciphertext.toString()
  }
}

function decrypt(message, key) {
  var bytes = AES.decrypt(message.toString(), key);
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext
}


module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
}