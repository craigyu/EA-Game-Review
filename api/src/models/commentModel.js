const Model = require('objection').Model;

class commentModel extends Model {
  static get tableName() {
    return 'comment';
  }

  static get idColumn() {
    return 'comment_id';
  }
  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'blog_id', 'comment_content'],
      properties: {
        comment_id: {type: 'integer'},
        user_id: { type: 'string', minLength: 1},
        blog_id: { type: 'integer' },
        comment_content: { type: 'string', minLength: 1, maxLength: 255},
        created_at: { type : 'date-time' },
        updated_at: { type : 'date-time' },
      },
    };
  }
}

module.exports = commentModel;
