import { PackagePageProps } from './packagePage.types';

export const FILE_MOCK =
  'file:///Users/oadmin/Library/Developer/CoreSimulator/Devices/7CB28B37-A684-44C4-BC9B-5B222D4A59FE/data/Containers/Data/Application/2AD599B1-41B4-41D0-9487-F4F845F1EECB/Library/Caches/ExponentExperienceData/%2540zbsprod%252Fvamoose/ImagePicker/F3AF818E-E2A6-4479-A10A-DE205DA81955.jpg';

export const data: PackagePageProps[] = [
  {
    date: '2022-02-17T22:00:00',
    title: 'VIP Table - Front Stage',
    place: 'Club E11even',
    restrictions: ['5000', '16'],
    description:
      'See DJ Diplo from our exclusive VIP table with dedicated waitstaff. ' +
      'Best view in the club. Doors open at 10pm.' +
      `See DJ Diplo from our exclusive VIP table with dedicated waitstaff. 

` +
      'Best view in the club. Doors open at 10pm.' +
      'See DJ Diplo from our exclusive VIP table with dedicated waitstaff. ' +
      'Best view in the club. Doors open at 10pm.' +
      'See DJ Diplo from our exclusive VIP table with dedicated waitstaff. ' +
      'Best view in the club. Doors open at 10pm.',
    uri: FILE_MOCK,
  },
  {
    date: '2022-02-17T22:00:00',
    title: 'Executive Table Upper Stage',
    place: 'Club E11even',
    restrictions: ['2000', '9'],
    description:
      'See DJ Diplo from our specious execute table.' +
      'Great access to bars and terrific views of the club',
    uri: FILE_MOCK,
  },
  {
    date: '2022-02-17T22:00:00',
    title: 'Silver Table Side Deck',
    place: 'Club E11even',
    restrictions: ['1000', '4'],
    description:
      'See DJ Diplo from our specious execute table.' +
      'Great access to bars and terrific views of the club',
    uri: FILE_MOCK,
  },
];
