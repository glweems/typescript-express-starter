/* eslint-disable func-names */
exports.up = knex =>
  knex.schema.createTable('events', table => {
    table.increments('id').primary();
    table.string('title');
    table.string('date');
    table.string('street');
    table.string('city');
    table.string('state');
    table.integer('zip');
  });

exports.down = knex => knex.schema.dropTable('events');
