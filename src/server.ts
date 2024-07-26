import express from 'express';

const app: express.Application = express()

const hostName = 'localhost'
const port = 5000

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send(
        "<h1>This is New ExpressJs Server</h2>"
    )
 
})

app.listen(port, hostName, () => {
    console.log(`http://${hostName}:${port}`)
})