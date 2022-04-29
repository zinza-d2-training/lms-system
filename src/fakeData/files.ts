import { Files } from '../types/files';
import { formatDateTime } from '../utils/datetime';

export const files: Files[] = [
  {
    id: 1,
    name: 'The different roles.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 2,
    name: 'Import.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 3,
    name: 'Gamification.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 4,
    name: 'Reports.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 5,
    name: 'Customize.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00')
  }
];
