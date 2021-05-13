import moment from 'moment';

export const formatDate = (date) => moment(date.replace(/-/g, '/'), 'MM/DD/YYYY', true).valueOf();
