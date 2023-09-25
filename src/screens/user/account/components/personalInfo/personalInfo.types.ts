export type PersonalInfoValues = {
  birthdate: string;
  nickname: string;
  gender: {
    value: 'Man' | 'Woman' | 'Other' | null;
    isShown: boolean;
  };
  phoneNumber: string;
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
};

export interface PersonalInfoProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
