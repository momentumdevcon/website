import moment from 'moment';

export const formatDate = (date) => moment(date, 'MM-DD-YYYY', true).valueOf();
