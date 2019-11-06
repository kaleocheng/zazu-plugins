const current = new Date().toISOString().replace('T', ' ').substr(0, 7)
module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
        resolve(`http://localhost:1313/plan/${current}/`)
    })
  }
}
