import moment from 'moment';

export const convertDateTimePtBr = data => {
    return moment(data).format('DD/MM/YYYY HH:mm:ss', 'pt', true);
  };