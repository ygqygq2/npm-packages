export const formatLog = (...args: any[]) => {
  const line = args
    .filter((arg) => arg !== undefined) // 移除 undefined 值，否则产生空格
    .map((obj) => (typeof obj === "object" ? JSON.stringify(obj) : obj))
    .join(" ");
  return line;
};
