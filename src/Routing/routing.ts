import exp from 'constants';
import express from 'express';

const userRouting = express.Router();

userRouting.get('/', (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send(
        "<h1>This is New ExpressJs Server Method Get</h1>"
    )

})

userRouting.post('/createusers', (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send(
        "<h1>This is New ExpressJs Server Method Post</h1>"
    )

})
userRouting.put('/updateusers', (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send(
        "<h1>This is New ExpressJs Server Method Put</h1>"
    )

})
userRouting.delete('/deleteusers', (request: express.Request, response: express.Response) => {
    response.status(200)
    response.send(
        "<h1>This is New ExpressJs Server Method Delete</h1>"
    )

})

export default userRouting;