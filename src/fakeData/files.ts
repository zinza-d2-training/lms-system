import { File } from '../types/files';
import { formatDateTime } from '../utils/datetime';

export const files: File[] = [
  {
    id: 1,
    name: 'The different roles.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00'),
    userId: 1
  },
  {
    id: 2,
    name: 'Import.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00'),
    userId: 1
  },
  {
    id: 3,
    name: 'Gamification.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00'),
    userId: 1
  },
  {
    id: 4,
    name: 'Reports.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00'),
    userId: 1
  },
  {
    id: 5,
    name: 'Customize.mp4',
    size: '123KB',
    courseId: 1,
    created_At: formatDateTime('1995-12-17T03:24:00'),
    userId: 1
  },
  {
    id: 6,
    name: 'The different roles.mp4',
    size: '472KB',
    courseId: 2,
    created_At: formatDateTime('2022-05-11T03:24:00'),
    userId: 2
  },
  {
    id: 2,
    name: 'Import.mp4',
    size: '472KB',
    courseId: 2,
    created_At: formatDateTime('2022-05-11T03:24:00'),
    userId: 2
  },
  {
    id: 7,
    name: 'Gamification.mp4',
    size: '472KB',
    courseId: 2,
    created_At: formatDateTime('2022-05-11T03:24:00'),
    userId: 2
  },
  {
    id: 8,
    name: 'Reports.mp4',
    size: '472KB',
    courseId: 2,
    created_At: formatDateTime('2022-05-11T03:24:00'),
    userId: 2
  },
  {
    id: 9,
    name: 'Customize.mp4',
    size: '472KB',
    courseId: 2,
    created_At: formatDateTime('2022-05-11T03:24:00'),
    userId: 2
  }
];
