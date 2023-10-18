export type PersonalInfoValues = {
  birthdate: string;
  nickname: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
  sexualOrientation: {
    value:
      | 'Straight'
      | 'Gay'
      | 'Lesbian'
      | 'Bisexual'
      | 'Asexual'
      | 'Demisexual'
      | 'Pansexual'
      | 'Queer'
      | null;
    isShown: boolean;
  };
  sexualOrientationShown: boolean;
  email: string;
  shownGender: 'Man' | 'Woman' | 'Everyone' | null;
  phoneNumber: string;
};

export interface PersonalInfoProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
