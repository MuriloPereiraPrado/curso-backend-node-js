import { jwt } from '../utils/index.js';


function asureAuth(req,res,next){
    if(!req.headers.authorization){
        return res.status(400).send({msg:"você não autorização para a aplicação"});
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    try {
        const hasExpired = jwt.hasExpiredToken(token);

        if(hasExpired){
            return res.status(400).send({msg:"Token expirado!"});
        }

        const payload = jwt.decoded(token);
        req.user = payload

        next();
    }catch(error){
        console.log(error);
    }
}

export const mdAuth = {
    asureAuth
}
