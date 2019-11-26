const generatePassword = (strength, length) => {
    strength = strength || 'average'
    length = length || 16

    // build the charaters we'll use to generate the password
    let characters = ''
    switch (strength) {
        case 'strong':
            characters += '!@#$%^&*()'
        case 'normal':
            // exclude numbers which can be easily visually confused
            characters += '23456789'
        default:
            // exclude characters which can be easily visually confused
            characters += 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    }

    // generate the password
    let password = ''
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}

module.exports = (pluginContext) => {
    return (input, env = {}) => {
        return new Promise((resolve, reject) => {
            let args = input.trim().split(" ")
            let length = args[0] || 8;
            resolve([{
                title: `generate  ${length} password`,
                value: generatePassword('strong', length)
            }])

        })
    }
}
