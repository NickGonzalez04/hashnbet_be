
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', user => {
    user.increments();
    user.string('username', 128).unique().notNullable();
    user.string('password', 128).notNullable();
   });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
