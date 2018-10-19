
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.integer('author_id').references('id').inTable('users').notNullable();
    table.integer('trigger_id').references('id').inTable('triggers').notNullable();
    table.string('comment').notNullable();
    table.timestamp('created_at').defaulTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  if(process.env.NODE_ENV === 'development') {
    return knex.schema.dropTable('comments');
  }
};
