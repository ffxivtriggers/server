
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('triggers', (table) => {
    table.increments().primary();
    table.string('title').notNullable();
    table.integer('author_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.string('type').notNullable().defaultTo('Vanilla ACT');
    table.string('content').notNullable();
    table.string('description').notNullable();
    table.integer('comment_count').notNullable().defaultTo(0);
    table.integer('star_count').notNullable().defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('triggers');
};
