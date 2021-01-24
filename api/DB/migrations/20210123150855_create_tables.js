exports.up = async function (knex, Promise) {

  /*** users ***/
  await knex.schema.createTable('users', (table) => {
    table.string('user_id').notNullable().primary();
    table.string('user_name').notNullable().unique();
  });

  /*** blog ***/
  await knex.schema.createTable('blog', (table) => {
    table.increments('blog_id');
    table.string('user_id').references('user_id').inTable('users');
    table.string('title').notNullable();
    table.string('blog_content', 2000).notNullable();
    table.string('img_url').nullable();
    table.timestamps(false, true);
  });

  /*** comment ***/
  await knex.schema.createTable('comment', (table) => {
    table.increments('comment_id');
    table.string('user_id').references('user_id').inTable('users');
    table.integer('blog_id').references('blog_id').inTable('blog');
    table.string('comment_content', 255).notNullable();
    table.timestamps(false, true);
  });

};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('comment');

  await knex.schema.dropTable('blog');

  await knex.schema.dropTable('users');
};

