import { User } from "../entities/User";
import { TwoFactorAuth } from "../entities/TwoFactorAuth";
import { generateTwoFactorSecret } from "../services/generateTwoFactorSecret";
import AppDataSource from "../config/db";

export const enableTwoFactorAuthentication = async (userId: number) => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
        where: { id: userId },
        relations: ["twoFactorAuth"]
    });
    

    if (!user) throw new Error("User not found");

    const secret = generateTwoFactorSecret(user.email);

    if (!user.twoFactorAuth) {
        user.twoFactorAuth = new TwoFactorAuth();
    }

    user.twoFactorAuth.secret = secret.base32;
    user.twoFactorAuth.isEnabled = true;

    await userRepository.save(user);

    return { qrCode: secret.otpauth_url, secret: secret.base32 };
};
