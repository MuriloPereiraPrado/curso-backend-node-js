
import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';

function register(req, res){
    const { email, password } = req.body;

    const salt = bcrypt.genSaltSync(12);
    const hashpassword = bcrypt.hashSync(password, salt);

    const user = User({
        email: email.toLowerCase(),
        password: hashpassword,
    });


    user.save((error, userStorage) => {
        if(error){
            res.status(400).send({ mgs: "erro ao cadastrar usuario"});
        }else {
            res.status(201).send(userStorage);
        }
    });
}

function login(req, res){

}


export const AuthController = {
    register
}
