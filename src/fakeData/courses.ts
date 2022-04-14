import { CoursesDB } from '../types/courses';
import { formatDateTime } from '../utils/datetime';

export const courses: CoursesDB[] = [
  {
    id: 1,
    title: 'Introduction to TalentLMS',
    imageURL:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346756_intro.png?',
    description: 'Introduction to TalentL',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 2,
    title: 'Advanced Features of TalentLMS ',
    imageURL:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346702_toolkit.png?',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 3,
    title: 'Content and TalentLMS ',
    imageURL:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346716_content.png?',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 4,
    title: 'Getting Started With eLearning ',
    imageURL:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346739_fundamentals.png?',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 5,
    title: 'Employee Training 101 ',
    imageURL:
      'https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346727_employees.png?',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 6,
    title: 'What is TalentLibrary? ',
    imageURL:
      'https://d3j0t7vrtr92dk.cloudfront.net/samples/1635953915_whatistalentlibrary.png?',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 7,
    title: 'Give your course a name',
    imageURL: 'https://huyhoang7511.talentlms.com/pages/images/unknown_x4.png',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  },
  {
    id: 8,
    title: 'Give your course a name 2',
    imageURL: 'https://huyhoang7511.talentlms.com/pages/images/unknown_x4.png',
    description: 'Học lập trình',
    timeUpdate: formatDateTime('1995-12-17T03:24:00')
  }
];
