
exports.seed = function(knex, Promise) {
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
          comment_count: '1',
          star_count: '0',
          author_id: '1',
        },
        {
          id: 2, 
          title: 'Second ACT Trigger', 
          type: 'Vanilla ACT', 
          content:'<Trigger R="a ready check" SD="Food Check" ST="3" CR="F" C="General" T="F" TN="" Ta="F" />',
          description: 'This is a Trigger test description',
          comment_count: '0',
          star_count: '0',
          author_id: '2',
        },
        {
          id: 3, 
          title: 'Third ACT Trigger', 
          type: 'Triggernometry', 
          content:'<Trigger R="a ready check" SD="Food Check" ST="3" CR="F" C="General" T="F" TN="" Ta="F" />',
          description: 'This is a Trigger test description',
          comment_count: '0',
          star_count: '0',
          author_id: '3',
        },
      ]);
    });
};
