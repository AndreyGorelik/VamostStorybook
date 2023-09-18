export interface PostTag {
  tag: string;
  id: string;
}

export interface PostGuests {
  avatar: string;
  nickName: string;
  id: string;
  gender: {
    value: string;
    isShown: false;
  };
}

export interface PostCardProps {
  photo: string;
  postTags: PostTag[];
  startDate: Date;
  startTime: Date;
  venueName: string;
  venueLocation: string;
  postName: string;
  guestMaleCount: number;
  guestFemaleCount: number;
  guestOtherCount: number;
  guests: PostGuests[];
  id: string;
}
