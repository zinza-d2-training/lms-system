import { CourseCompletion, CoursesDB } from '../types/courses';
import { formatDateTime } from '../utils/datetime';

export const courses: CoursesDB[] = [
  {
    id: 1,
    title: 'Introduction to TalentLMS',
    image:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346756_intro.png?',
    description: 'Introduction to TalentL',
    updatedAt: formatDateTime('2021-10-17T03:24:00'),
    createdAt: formatDateTime('2022-01-14T03:24:00')
  },
  {
    id: 2,
    title: 'Advanced Features of TalentLMS ',
    image:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346702_toolkit.png?',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 3,
    title: 'Content and TalentLMS ',
    image:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346716_content.png?',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00'),
    createdAt: formatDateTime('2022-02-30T03:24:00')
  },
  {
    id: 4,
    title: 'Getting Started With eLearning ',
    image:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346739_fundamentals.png?',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 5,
    title: 'Employee Training 101 ',
    image:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346727_employees.png?',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00'),
    createdAt: formatDateTime('2022-02-05T03:24:00')
  },
  {
    id: 6,
    title: 'What is TalentLibrary? ',
    image:
      'https://d3j0t7vrtr92dk.cloudfront.net/samples/1635953915_whatistalentlibrary.png?',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 7,
    title: 'Give your course a name',
    image: 'https://huyhoang7511.talentlms.com/pages/images/unknown_x4.png',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00'),
    createdAt: formatDateTime('2022-02-28T03:24:00')
  },
  {
    id: 8,
    title: 'Give your course a name 2',
    image: 'https://huyhoang7511.talentlms.com/pages/images/unknown_x4.png',
    description: 'Học lập trình',
    updatedAt: formatDateTime('2021-10-17T03:24:00'),
    createdAt: formatDateTime('2022-02-11T03:24:00')
  }
];

export const courseCompletions: CourseCompletion[] = [
  {
    id: 1,
    userId: 1,
    courseId: 1,
    title: 'Introduction to TalentLMS',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),
    completionDate: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 2,
    userId: 1,
    courseId: 1,
    title: 'Advanced Features of TalentLMS ',
    enrolledOn: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 3,
    userId: 1,
    courseId: 1,
    title: 'Content and TalentLMS ',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),
    completionDate: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 4,
    userId: 2,
    courseId: 1,
    title: 'Getting Started With eLearning ',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),
    completionDate: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 5,
    userId: 2,
    courseId: 1,
    title: 'Employee Training 101 ',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),
    completionDate: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 6,
    userId: 1,
    courseId: 1,
    title: 'What is TalentLibrary? ',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),

    completionDate: formatDateTime('2021-10-17T03:24:00')
  },
  {
    id: 7,
    userId: 2,
    courseId: 1,
    title: 'Give your course a name',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),
    completionDate: formatDateTime('2022-02-28T03:24:00')
  },
  {
    id: 8,
    userId: 1,
    courseId: 1,
    title: 'Give your course a name 2',
    enrolledOn: formatDateTime('2021-10-17T03:24:00'),
    completionDate: formatDateTime('2022-02-11T03:24:00')
  }
];
