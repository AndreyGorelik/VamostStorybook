import { UserState } from 'src/store/slices/userSlice';

export function checkUserField(user: UserState) {
  let finished = false;
  let step = 0;

  if (!user.email) step = 3;
  if (!user.nickname) step = 4;
  if (!user.birthdate) step = 5;
  if (!user.gender || !user.gender.value) step = 6;
  if (!user.sexualOrientation || !user.sexualOrientation.value) step = 7;
  if (!user.shownGender) step = 8;
  if (!user.images || !user.images.length) {
    step = 9;
    finished = false;
  }
  if (user.images && user.images.length) {
    finished = true;
  }

  return { step, finished };
}
