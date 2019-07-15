import * as Knex from 'knex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../knexfile');

const env = process.env.NODE_ENV || 'development';

export default Knex(config[env]);
