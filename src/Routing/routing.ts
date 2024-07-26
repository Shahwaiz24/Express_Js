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

userRouting.get('/login', (request: express.Request, response: express.Response) => {

    let body = request.body;
    // let jsonResponse = JSON.parse(body)
    // response.status(200)
    // response.send(`<h1>${jsonResponse}</h1>`)

    if (request.statusCode == 200 && body.name == 'shahwaiz') {
        response.status(200).json({
            'name': body.name,
            'email': body.email,
            'msg': 'Login Success'
        });

    }
    else {
        response.status(400).json({
            'name': body.name,
            'email': body.email,
            'msg': 'Invalid Email'
        });
    }


})