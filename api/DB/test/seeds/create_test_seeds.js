
exports.seed = async function(knex) {
  await knex('users').insert([
    {user_id: 'UgZj81', user_name: 'Cheeto Fingers'},
    {user_id: 'T6Shau', user_name: 'Captain Slow'},
  ]);

  await knex('blog').insert([
    {blog_id: 1, user_id: 'UgZj81',
      blog_content: `Agent 47’s unique brand of slow-paced stealth in an assortment of dense, deadly, and deeply varied murder playgrounds has reached a wonderful crescendo in Hitman 3. While it doesn’t stray from the killer chord combination developer IO Interactive crafted for 2016’s Hitman – and continued to use in 2018’s Hitman 2 – it’s abundantly clear here that the studio has well and truly mastered its act. With some of the most surprising and imaginative levels in the series so far, Hitman 3 may feel largely familiar to its two most-recent predecessors, but just thinking of the hours upon hours of chaos, carnage, and cruel comedy that each of its six outstanding new maps will produce makes me giddy. Credit: https://www.ign.com/articles/hitman-3-review`,
      title: 'Hitman 3 Review',
      img_url: `https://www.ioi.dk/wp-content/uploads/2020/08/HITMAN3_Key_Art_date-1536x864.jpg`,
      created_at: '2021-01-20 23:08:28.388677-07',
      updated_at: '2021-01-20 23:08:28.388677-07',
    },
  ]);

  await knex('comment').insert([
    {
      comment_id: 1,
      user_id: 'UgZj81',
      blog_id: 1,
      comment_content: 'Is it cracked yet?',
      created_at: '2021-01-21 23:08:28.388677-07',
      updated_at: '2021-01-21 23:08:28.388677-07',
    },
  ]);
};
