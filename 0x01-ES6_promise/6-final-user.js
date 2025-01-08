import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((data) =>
    data.map((entry) => ({
      status: entry.status,
      value: entry.status === 'fulfilled' ? entry.value : entry.reason.toString(),
    })),
  );
}
