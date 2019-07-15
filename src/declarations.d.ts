interface Err extends Error {
  status: number;
  data?: Record<string, any>;
}
