const { readFileSync } = require('fs')
const { resolve } = require('path')
const { createServer } = require('http')

/**
 * Check is ESM file
 */
function isESM(url) {
    return String(url).endsWith('mjs')
}

/**
 * Obtain MIME Type info
 */
function mimeType(url) {
    return isESM(url) ? 'application/javascript' : 'text/html'
}

/**
 * Obtain entry file
 */
function entryFile(url) {
    const file = isESM(url) ? `../src/esm${url}` : './index.html'
    return resolve(__dirname, file)
}

/**
 * Create HTTP server
 */
const app = createServer((request, response) => {
    // obtain the relative path of request
    const { url } = request

    // convert to the corresponding local file and read its content
    const entry = entryFile(url)
    const data = readFileSync(entry, 'utf-8')
    // console.log(`url: ${url}`)
    // console.log(`entry file: ${entry}`)

    // set correct response header
    response.writeHead(200, { 'Content-Type': mimeType(url) })
    response.end(data)
})

// start server
const port = 8080
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at:`)
    console.log()
    console.log(`   =>  Local: http://localhost:${port}/`)
    console.log()
})