import { createHash } from "node:crypto";

const encryptPass = (password: string) => {
    const hash = createHash("sha256")
    .update(password, 'utf-8')
    .digest("hex");
    return hash;
}

export default encryptPass;