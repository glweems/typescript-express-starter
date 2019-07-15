<<<<<<< HEAD
const router = require('express-promise-router')();

router.use('/', require('./controllers/home'));
router.use('/events', require('./controllers/event'));

=======
import { Router } from 'express';

const router = Router();

router.use('/', require('./controllers/home'));

>>>>>>> master
module.exports = router;
