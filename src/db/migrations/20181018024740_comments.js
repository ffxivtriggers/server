
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments();
    table.integer('author_id').notNullable().references('id').inTable('users');
    table.integer('trigger_id').notNullable().references('id').inTable('triggers');
    table.string('comment').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
