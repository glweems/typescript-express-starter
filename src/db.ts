import * as Knex from 'knex';

import { Model } from 'objection';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../knexfile');

const env = process.env.NODE_ENV || 'development';
const knex = Knex(config[env]);

Model.knex(knex);

export default Model;
