
exports.seed = function(knex, Promise) {
  if(process.env.NODE_ENV !== 'production') {
  // Deletes ALL existing entries
    return knex('triggers').del()
      .then(function () {
      // Inserts seed entries
        return knex('triggers').insert([
          {
            id: 1, 
            title: 'First ACT Trigger', 
            type: 'Vanilla ACT', 
            content:'<Trigger R="a ready check" SD="Food Check" ST="3" CR="F" C="General" T="F" TN="" Ta="F" />',
            description: 'This is a Trigger test description',
            comment_count: 1,
            star_count: 0,
            author_id: 1,
            created_at: knex.fn.now(), updated_at: knex.fn.now()
          },
          {
            id: 2, 
            title: 'Second ACT Trigger', 
            type: 'Vanilla ACT', 
            content:'<Trigger R="a ready check" SD="Food Check" ST="3" CR="F" C="General" T="F" TN="" Ta="F" />',
            description: 'This is a Trigger test description',
            comment_count: 1,
            star_count: 0,
            author_id: 2,
            created_at: knex.fn.now(), updated_at: knex.fn.now()
          },
          {
            id: 3, 
            title: 'Third ACT Trigger', 
            type: 'Triggernometry', 
            content:'<Trigger R="a ready check" SD="Food Check" ST="3" CR="F" C="General" T="F" TN="" Ta="F" />',
            description: 'This is a Trigger test description',
            comment_count: 0,
            star_count: 0,
            author_id:  3,
            created_at: knex.fn.now(), updated_at: knex.fn.now()
          },
        ]);
      });
  }
};
