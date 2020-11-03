export interface AuthUserModel {
    email: string;
    jwt: JsonWebToken;
}

export interface JsonWebToken {
    accessToken: string;
    expiresMinutes: number;
    expiresOnServer: number;
    expiresOnClient: number;
}