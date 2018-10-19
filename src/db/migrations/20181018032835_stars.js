
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('stars', (table) => {
    table.increments();
    table.integer('starred_by').notNullable().references('id').inTable('users').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stars');
};