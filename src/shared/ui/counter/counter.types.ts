export interface CounterProps {
  title: string;
  count: number;
  increaseValue: () => void;
  decreaseValue: () => void;
}
