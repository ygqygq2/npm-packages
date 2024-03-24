export type ErrorCodeMessage = {
  [key: string]: string;
};

export type Output = {
  info: (...args: any[]) => void;
  error: (...args: any[]) => void;
};
