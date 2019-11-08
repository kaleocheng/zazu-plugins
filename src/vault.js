const {exec} = require('child_process')
const yaml = require('js-yaml')
const Fuse = require('fuse.js')
const path = require('path')
const options = {
    keys: ["title",  "vaule"]
}


module.exports = (pluginContext) => {
  return (input, env = {}) => {
    return new Promise((resolve, reject) => {
        let args = input.split(" ")
        if (args.length  == 1) {
            resolve([{
                title: `searching in project ${args[0]}`,
                value: ""
            }])
        } else if(args.length == 2) {
            resolve([{
                title: `searching ${args[1]} env in project ${args[0]}`,
                value: ""
            }])
        } else {
            const vaultScript = path.join(pluginContext.cwd, "src/","vault.sh")
            const vaultCommand = exec(`sh ${vaultScript} ${args[0]} ${args[1]}`)
            vaultCommand.stdout.on('data', (data)=>{
                obj = yaml.safeLoad(data)
                data = Object.keys(obj).map(function(x) {return {"title": x, "value": obj[x]}})
                const fuse = new Fuse(data, options)
                resolve(fuse.search(args.slice(2).join(" ")))
            })

            vaultCommand.stderr.on('data', (data)=>{
                resolve([
                    {title: data, value: data}
                ])
            })
        }
    })
  }
}
