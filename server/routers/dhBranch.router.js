import bodyParser from 'body-parser';
import { Read, Update, Delete} from '../controller/dhBranch.controller.js   ';
import { Insert } from '../controller/dhBranch.controller.js';

import express from 'express'

const router=express.Router();

    router.route('/').get(Read)
    //router.param('staffno', Update)
    router.route('/newbranch', bodyParser.json()).post(Insert)
    router.route('/update').put(Update)
    router.route('/delete').delete(Delete)

export default router;