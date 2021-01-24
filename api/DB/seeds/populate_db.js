
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: '111', user_name: 'rowValue1'},
        {user_id: '222', user_name: 'rowValue2'},
        {user_id: '333', user_name: 'rowValue3'},
      ]);
    });
};
