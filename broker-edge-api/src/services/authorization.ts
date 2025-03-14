import crypto from "node:crypto";

export const generateToken = (length = 32) => {
    return crypto.randomBytes(length).toString('hex');
}

export const newAuthorizationToken = async (userId : number, businessId: number , redisClient:any , expressResponse: any )=> {

    const token = generateToken();

    // save username and password to redis using token as the key
    redisClient.hSet(`user-token:${token}`, {
        'userId': userId,
        'businessId': businessId,
    })

    // store the token in a cookie
    // this cookie is session based meaning it is gone if they close the browser
    expressResponse.cookie('userToken', token, {
        httpOnly: true,
        secure: false, // Use HTTPS in production
    })
}

export const authorize = async (expressRequest :any, redisClient :any) :Promise<any> => {

    console.log("Cookies received by backend:", expressRequest.cookies);

    // first get the token value from the cookie
    const authToken :string = expressRequest.cookies.userToken;

    console.log("authToken", authToken);

    // if there is no auth token, they are not authorized, return false
    if (!authToken) {
        return null;
    }

    // next grab the userId and businessId from redis
    return await redisClient.hGetAll(`user-token:${authToken}`);
}