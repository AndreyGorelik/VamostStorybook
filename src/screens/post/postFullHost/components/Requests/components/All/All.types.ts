interface AllProps {
  id: string;
  confirmRequest: (id: string) => void;
  deleteRequest: (id: string) => void;
}

export type { AllProps };
