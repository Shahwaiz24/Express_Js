
import express from "express";

let AppLoger = (request: express.Request, response: express.Response, next: express.NextFunction)=>{
    let date = new Date().toLocaleDateString;
    let time = new Date().toLocaleTimeString;
    let Method = request.method;
    let url = request.url;

    console.log(`${date} | ${time} | ${Method} | ${url}`);
    next();
}

export default AppLoger;