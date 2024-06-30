// schema/notifications.js
import { schema, normalize } from 'normalizr';

const notification = new schema.Entity('notifications');

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};

