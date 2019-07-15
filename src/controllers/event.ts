import { wrap, error, validateQuery } from '../utils';

import Event from '../models/Event';

const router = require('express-promise-router')();

router.get(
  '/',
  validateQuery(['id', 'street']),
  wrap(async (req, res) => {
    try {
      const events = await Event.query().findById(1);
      res.json(events);
    } catch (e) {
      throw error({ status: 500, message: e.message });
    }
  })
);

module.exports = router;
