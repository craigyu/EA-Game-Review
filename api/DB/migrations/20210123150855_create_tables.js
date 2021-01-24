exports.up = async function (knex, Promise) {

  /*** users ***/
  await knex.schema.createTable('users', (table) => {
    table.string('user_id').notNullable().primary();
    table.string('user_name').notNullable().unique();
  });

  /*** blog ***/
  await knex.schema.createTable('blog', (table) => {
    table.integer('blog_id').increments();
    table.string('content', 2000);
    table.string('img_url');
    table.string('author').references('user_id').inTable('users');
    table.timestamps(false, true);
  });

  /*** comment ***/
  await knex.schema.createTable('comment', (table) => {
    table.increments();
    table.string('user_id').references('user_id').inTable('users');
    table.integer('blog_id').references('blog_id').inTable('blog');
    table.string('content', 255);
    table.timestamps(false, true);
  });

};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTable('users');

  await knex.schema.dropTable('users');

  await knex.schema.dropTable('users');
};

