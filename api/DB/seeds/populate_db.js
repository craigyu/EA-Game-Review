
exports.seed = async function(knex) {
  await knex('users').insert([
    {user_id: 'UgZj81', user_name: 'Cheeto Fingers'},
    {user_id: '0FrKFf', user_name: 'Angry Orangutan'},
    {user_id: 'T6Shau', user_name: 'Captain Slow'},
    {user_id: 'AEKNWx', user_name: 'Hospitalized Hamster'},
  ]);

  await knex('blog').insert([
    {blog_id: 1, user_id: 'UgZj81',
      blog_content: `Agent 47’s unique brand of slow-paced stealth in an assortment of dense, deadly, and deeply varied murder playgrounds has reached a wonderful crescendo in Hitman 3. While it doesn’t stray from the killer chord combination developer IO Interactive crafted for 2016’s Hitman – and continued to use in 2018’s Hitman 2 – it’s abundantly clear here that the studio has well and truly mastered its act. With some of the most surprising and imaginative levels in the series so far, Hitman 3 may feel largely familiar to its two most-recent predecessors, but just thinking of the hours upon hours of chaos, carnage, and cruel comedy that each of its six outstanding new maps will produce makes me giddy. Credit: https://www.ign.com/articles/hitman-3-review`,
      title: 'Hitman 3 Review',
      img_url: `https://www.ioi.dk/wp-content/uploads/2020/08/HITMAN3_Key_Art_date-1536x864.jpg`,
      created_at: '2021-01-20 23:08:28.388677-07',
      updated_at: '2021-01-20 23:08:28.388677-07',
    },
    {blog_id: 2, user_id: 'UgZj81',
      blog_content: `Hell Let Loose brings World War II on an epic scale: huge battles of 100 players per game (50 vs 50,) and over 20 different player-controlled vehicles and deployed weapons. Supply, capture and building mechanics all play their part in a team's victory. Capture sectors and resources to secure the win for your team! Credit: https://www.ign.com/games/hell-let-loose`,
      title: 'Hell Let Loose Review',
      img_url: `https://i.ytimg.com/vi/SxEttyLFqgE/maxresdefault.jpg`,
      created_at: '2020-11-10 23:08:28.388677-07',
      updated_at: '2020-11-10 23:08:28.388677-07',
    },
    {blog_id: 3, user_id: 'UgZj81',
      blog_content: `Formula One is very much defined by its superstar drivers. Hamilton. Schumacher. Senna. These names loom large over entire eras of F1 racing. But while it’s the drivers that get the adulation, the legacies, and the lucrative watch endorsement deals, above all that Formula One is still a team sport. Credit: https://www.ign.com/articles/f1-2020-review`,
      title: 'F1 2020 Review',
      img_url: `https://www.codemasters.com/wp-content/uploads/2020/04/ps_f1_2020_new.jpg`,
      created_at: '2020-05-18 23:08:28.388677-07',
      updated_at: '2020-05-18 23:08:28.388677-07',
    },
    ]);

  await knex('comment').insert([
    {
      comment_id: 1,
      user_id: '0FrKFf',
      blog_id: 1,
      comment_content: 'Is it cracked yet?',
      created_at: '2021-01-21 23:08:28.388677-07',
      updated_at: '2021-01-21 23:08:28.388677-07',
    },
    {
      comment_id: 2,
      user_id: 'AEKNWx',
      blog_id: 1,
      comment_content: `Don't let 47 see you torrenting`,
      created_at: '2021-01-22 13:03:28.388677-07',
      updated_at: '2021-01-22 13:03:28.388677-07',
    },
    {
      comment_id: 3,
      user_id: 'T6Shau',
      blog_id: 1,
      comment_content: `oh, they turned that movie into a game? nice`,
      created_at: '2021-01-23 10:23:28.388677-07',
      updated_at: '2021-01-23 10:23:28.388677-07',
    },
    {
      comment_id: 4,
      user_id: '0FrKFf',
      blog_id: 2,
      comment_content: `Very fun, trucks in the game are very slow though, 0/10`,
      created_at: '2020-11-11 12:33:28.388677-07',
      updated_at: '2020-11-11 12:33:28.388677-07',
    },
    {
      comment_id: 5,
      user_id: 'AEKNWx',
      blog_id: 2,
      comment_content: `is it better than Battlefield V?`,
      created_at: '2020-11-11 14:45:28.388677-07',
      updated_at: '2020-11-11 14:45:28.388677-07',
    },
    {
      comment_id: 6,
      user_id: '0FrKFf',
      blog_id: 3,
      comment_content: `If only real life F1 is as exciting as the game`,
      created_at: '2020-05-19 15:45:28.388677-07',
      updated_at: '2020-05-19 15:45:28.388677-07',
    },
    {
      comment_id: 7,
      user_id: 'T6Shau',
      blog_id: 3,
      comment_content: `How do I win?`,
      created_at: '2020-06-20 04:21:28.388677-07',
      updated_at: '2020-06-20 04:21:28.388677-07',
    },
    {
      comment_id: 8,
      user_id: '0FrKFf',
      blog_id: 1,
      comment_content: 'the bald head looks amazing with ray tracing on',
      created_at: '2021-01-22 09:01:28.388677-07',
      updated_at: '2021-01-22 09:01:28.388677-07',
    },


  ]);
};
