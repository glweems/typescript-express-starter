import Model from '../db';

export default class Event extends Model {
  static get tableName() {
    return 'events';
  }
}
