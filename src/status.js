module.exports = (pluginContext) => {
  return (search, env = {}) => {
    return new Promise((resolve, reject) => {
        resolve(`http://localhost:1313/plan/status/`)
    })
  }
}
