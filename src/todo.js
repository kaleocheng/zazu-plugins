module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
        const current = new Date().toISOString().replace('T', ' ').substr(0, 7)
        resolve(`http://localhost:1313/day/${current}/`)
    })
  }
}
