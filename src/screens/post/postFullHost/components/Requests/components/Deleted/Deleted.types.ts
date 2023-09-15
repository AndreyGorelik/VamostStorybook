interface DeletedProps {
  id: string;
  confirmRequest: (id: string) => void;
  deleteRequest: (id: string) => void;
}

export type { DeletedProps };
