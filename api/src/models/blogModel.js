const Model = require('objection').Model;

class blogModel extends Model {
  static get tableName() {
    return 'blog';
  }

  static get idColumn() {
    return 'blog_id';
  }
  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'title', 'blog_content'],
      properties: {
        blog_id: { type: 'integer' },
        user_id: {type: 'string', minLength: 1},
        title: {type: 'string', minLength: 1, maxLength: 63},
        blog_content: { type: 'string', minLength: 1, maxLength: 2000},
        img_url: { type: 'string' },
        created_at: { type : 'date-time' },
        updated_at: { type : 'date-time' },
      },
    };
  }
}

module.exports = blogModel;
