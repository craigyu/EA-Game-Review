const Model = require('objection').Model;

class userModel extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'user_id';
  }
  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'user_name'],
      properties: {
        user_id: { type: 'string' },
        user_name: { type: 'string' },
      },
    };
  }
}

module.exports = userModel;
