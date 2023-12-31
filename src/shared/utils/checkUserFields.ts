import { UserState } from 'src/store/slices/user.slice';

export function checkUserField(user: UserState) {
  let finished = false;
  let step = 0;
  if (!user.phoneNumber) step = 1;
  else if (!user.phoneVerified) step = 2;
  else if (!user.email) step = 3;
  else if (!user.nickname) step = 4;
  else if (!user.birthdate) step = 5;
  else if (!user.gender || !user.gender.value) step = 6;
  else if (!user.sexualOrientation || !user.sexualOrientation.value) step = 7;
  else if (!user.shownGender) step = 8;
  else if (!user.images || !user.images.length) {
    step = 9;
    finished = false;
  } else if (user.images && user.images.length) {
    finished = true;
  }

  return { step, finished };
}
