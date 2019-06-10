import { API_EVENTS } from './constants';


export function getEventsUrl(pageSize = 10, page = 1, actualUntil, fields) {
  const res = `${API_EVENTS}/?page_size=${pageSize}&page=${page}`;

  if (actualUntil) {
    res += `&actual_until=${actualUntil}`;
  }
  if (fields.length > 0) {
    const fieldsStr = fields.join(',');
    res += `&fields=${fieldsStr}`;
  }

  return res;
}
