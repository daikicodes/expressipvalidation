require('dotenv').config()

const express = require('express')
const app = express()

app.set('trust proxy', true)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    
    const clientIP = req.ip
    const message = `<h1>your IP address is ${clientIP}<h1>`

    res.send(message)

})

app.listen(port, () => {

    console.log(`server running on http://localhost:${port}`)

})