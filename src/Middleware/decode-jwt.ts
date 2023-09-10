import { decode } from "jsonwebtoken";

export const decodeToken = (token: string) => {
  const decoded = decode(token);
  return decoded;
};
