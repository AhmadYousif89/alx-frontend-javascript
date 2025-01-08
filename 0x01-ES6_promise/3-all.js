import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data = Promise.all([uploadPhoto(), createUser()]);
  data.then(([{ body }, { firstName, lastName }]) => console.log(body, firstName, lastName));
}
