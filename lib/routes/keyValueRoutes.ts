import { Request, Response } from "express";
import { KeyValueController } from '../controllers/keyValueController';

export class Routes {

    public keyValueController: KeyValueController = new KeyValueController()

    public routes(app): void {
        // object 
        app.route('/object')
            // POST endpoint
            .post(this.keyValueController.addNewKeyValue);

        // Contact detail
        app.route('/object/:key')
            // get specific object
            .get(this.keyValueController.getValueByKey)
    }
}