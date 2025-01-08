import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data = Promise.all([uploadPhoto(), createUser()]);
  return data
    .then(([{ body }, { firstName, lastName }]) => console.log(body, firstName, lastName))
    .catch(() => console.log('Signup system offline'));
}
