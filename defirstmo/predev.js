/* eslint-disable */
/**
 * 当前脚本执行之后，所有 latest 的包都会升级到最新版本，并锁包
 */
const pkg = require('./package.json')
const process = require('child_process')
const fs = require("fs")

Object.entries(pkg.dependencies).forEach(([npmName, npmValue]) => {
    // 非 latest 包不做升级
    if (npmValue.indexOf('latest') === -1) {
        return
    }
    process.exec(`npm install ${npmName}@latest`, (err, stdout) => {
        if (err) {
            console.log(err)
        } else {
            console.log(stdout)
        }
    })
})

// 修改指令
pkg.scripts.dev = 'formula dev'
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2), "utf-8")

// 当前脚本只需要执行一次，用后删除
fs.unlinkSync('./predev.js')