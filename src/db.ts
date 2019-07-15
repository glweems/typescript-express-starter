import * as Knex from 'knex';

<<<<<<< HEAD
import { Model } from 'objection';

=======
>>>>>>> master
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../knexfile');

const env = process.env.NODE_ENV || 'development';
const knex = Knex(config[env]);

<<<<<<< HEAD
Model.knex(knex);

export default Model;
=======
export default Knex(config[env]);
>>>>>>> master
