
exports.seed = function(knex, Promise) {
  if(process.env.NODE_ENV !== 'production') {
  // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
      // Inserts seed entries
        return knex('users').insert([
          {id: 1, username: 'admin', email: 'admin@ffxivtriggers.com', password: 'admin', role: 'admin', created_at: knex.fn.now(), updated_at: knex.fn.now()},
          {id: 2, username: 'user1', email: 'user1@ffxivtriggers.com', password: 'user1', created_at: knex.fn.now(), updated_at: knex.fn.now()},
          {id: 3, username: 'user2', email: 'user2@ffxivtriggers.com', password: 'user2', created_at: knex.fn.now(), updated_at: knex.fn.now()}
        ]);
      });
  }
};
