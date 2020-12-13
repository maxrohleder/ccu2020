import { environment } from './environment';
/**
 * Definition of Routes in api.md
 * make sure to sync the two files at all times
 */

let apiUrl = environment.endpoint;

// forum data
export const GET_FORUM_MESSAGES_ROUTE = apiUrl + 'api/forum/all';

// global data retrival
export const GET_COUNTRY_DATA_ROUTE = apiUrl + 'api/data/allCountries';
export const GET_NOTIFICATION_ROUTE = apiUrl + 'api/data/alerts';
export const GET_NEWS_ROUTE = apiUrl + 'api/data/news';

// custum data and settings
export const GET_CHECKLIST_ROUTE = apiUrl + 'api/settings/checklist';
