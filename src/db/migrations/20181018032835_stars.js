
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stars', (table) => {
    table.increments();
    table.integer('starred_by').references('id').inTable('users');
    table.timestamp('created_at').defaulTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  if(process.env.NODE_ENV === 'development') {
    return knex.schema.dropTable('stars');
  }
};