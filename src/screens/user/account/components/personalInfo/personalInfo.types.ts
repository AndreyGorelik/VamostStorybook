interface PersonalInfoProps {
}

export type PersonalInfoValues = {
  birthdate: string;
  nickname: string;
  gender: 'Man' | 'Woman' | 'Other' | null;
  phoneNumber: string;
  sexualOrientation:
    | 'Straight'
    | 'Gay'
    | 'Lesbian'
    | 'Bisexual'
    | 'Asexual'
    | 'Demisexual'
    | 'Pansexual'
    | 'Queer'
    | null;
  email: string;
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
};

export type { PersonalInfoProps };
