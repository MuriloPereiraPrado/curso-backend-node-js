import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../constants.js';

function createAccessToken(){
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 24);

    const payLoad = {
        token_type : 'accessToken',
        user_id : User._id,
        iat : Date.now(),
        exp : expToken.getTime(),
    }
    return jsonwebtoken.sign(payLoad, JWT_SECRET_KEY);
};

function createRefreshToken(){

};

function decoded(){

};

function hasExpiredToken(){

};

export const jwt = {
    createAccessToken,
    createRefreshToken,
    decoded,
    hasExpiredToken
}
