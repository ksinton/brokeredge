import crypto from "node:crypto";

function generateToken (length = 32){
    return crypto.randomBytes(length).toString('hex');
}

export const newAuthorizationToken = async (email:string, password: string , redisClient:any , expressResponse: any )=> {

    const token = generateToken();

    // save username and password to redis using token as the key
    redisClient.hSet(`user-token:${token}`, {
        'email': email,
        'password': password,
    })

    // store the token in a cookie
    // this cookie is session based meaning it is gone if they close the browser
    expressResponse.cookie('userToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use HTTPS in production
        sameSite: "none", // Allows cross-origin cookies
    })
}