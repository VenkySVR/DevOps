import express from 'express'
import os from 'os'
import fetch from 'node-fetch'

const app = express()
const port = 3000 // default port to listen

app.get('/', (req, res) => {
  res.send(`Hello world from ${os.hostname()}!`)
})

app.get("/nginx", async (req, res) => {
    const response = await fetch("http://nginx")
    const data = await response.text()
    res.send(data)
})

app.get("/app", async (req, res) => {
    const response = await fetch("http://app:3000")
    const data = await response.text()
    res.send(data)
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
    })

