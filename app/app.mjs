import express from 'express'
import os from 'os'

const app = express()
const port = 3000 // default port to listen

app.get('/', (req, res) => {
  res.send(`Hello world from ${os.hostname()}!`)
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
    })

