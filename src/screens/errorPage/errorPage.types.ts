interface ErrorPageProps {
  retry: () => Promise<void>;
  error: string;
  backButton?: boolean;
}

export type { ErrorPageProps };
