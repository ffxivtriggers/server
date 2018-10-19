
exports.seed = function(knex, Promise) {
  if(process.env.NODE_ENV !== 'production') {
  // Deletes ALL existing entries
    return knex('comments').del()
      .then(function () {
      // Inserts seed entries
        return knex('comments').insert([
          {id: 1, author_id: '2', trigger_id: '1', comment: 'this is a comment test'},
        ]);
      });
  }
};
