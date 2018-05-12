import { Request, Response } from "express";

export class Routes {

    public routes(app): void {

        // object 
        app.route('/object')
        // POST endpoint
        .post((req: Request, res: Response) => { 
            res.status(200).send({
                message: 'POST request successfull'
            })
        })

        app.route('/object/:key')
        // GET endpoint 
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfull'
            })
        })
    }
}