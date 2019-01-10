const express = require('express')
const serve = express()
const fs = require('fs')

const template = fs.readFileSync('./template.html','utf-8')
const serveBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// 第 2 步：创建一个 renderer
const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(serveBundle,{
    runInNewContext: false,
    template,
    clientManifest
})

serve.get('*', (req, res) => {
    const context = { url: req.url }
    renderer.renderToString(context,(err,html)=>{
        // if(err) throw err
        res.send(html)
    })

})



serve.listen(7777)