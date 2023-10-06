interface ErrorPageProps {
  retry: () => Promise<void>;
  error: string;
}

export type { ErrorPageProps };
