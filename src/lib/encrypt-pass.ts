import { createHash, timingSafeEqual } from "node:crypto";

export const encryptPass = (password: string) => {
  const hash = createHash("sha256").update(password, "utf-8").digest("hex");
  return hash;
};

export const comparePass = (password: string, hash: string) => {
  const inputHash = createHash("sha256")
    .update(password, "utf-8")
    .digest("hex");
  return timingSafeEqual(
    Buffer.from(inputHash, "hex"),
    Buffer.from(hash, "hex")
  );
};
