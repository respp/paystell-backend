import * as speakeasy from "speakeasy";

export const verifyTwoFactorCode = (token: string, secret: string): boolean => {
    return speakeasy.totp.verify({ secret, encoding: "base32", token });
};