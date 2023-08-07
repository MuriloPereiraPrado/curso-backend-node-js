import { User } from '../models/index.js';

async function getMe(req, res){
    res.status(200).json({msg:"Get Me !"});
}

export const UserController = {
    getMe
}
