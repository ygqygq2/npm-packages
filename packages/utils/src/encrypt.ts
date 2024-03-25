import CryptoJS from "crypto-js";

// 加密密码
export const encryptPassword = (cryptoSecret: string, password: string): string => {
  const hashedPassword = CryptoJS.SHA256(`${password}${cryptoSecret}`).toString(CryptoJS.enc.Hex);
  return hashedPassword;
};
