const request = require('request')
module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
        let url = `http://127.0.0.1:1314/search/${search}`
        request.get({url:url, json:true}, function (e, r, res) {
            resolve(res)
        })
    })
  }
}
