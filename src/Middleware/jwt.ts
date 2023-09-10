import { sign } from "jsonwebtoken";
import { convertMsToDays } from "../lib/ms-days";
import { payloadType } from "../../type";

const msToDays = convertMsToDays(1);

export const createToken = (user: any) => {
  const payload: payloadType = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const token = sign(payload, process.env.SECRET_KEY!, {
    expiresIn: msToDays,
  });

  return token;
};
