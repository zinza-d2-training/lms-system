import { format as formatFunction } from 'date-fns';
export function formatDateTime(
  dateTime: string,
  format: string = 'dd/MM/yyyy'
) {
  return formatFunction(new Date(dateTime), format);
}
