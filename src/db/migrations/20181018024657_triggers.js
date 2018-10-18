
exports.up = function(knex, Promise) {
  return knex.schema.createTable('triggers', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('type').notNullable().defaultTo('Vanilla ACT');
    table.string('description').notNullable();
    table.integer('comment_count').notNullable().defaultTo(0);
    table.integer('star_count').notNullable().defaultTo(0);
    table.integer('author_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  if(process.env.NODE_ENV === 'development') {
    return knex.schema.dropTable('triggers');
  }
};