
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
    const { email, password } = req.body;

    const emailLowerCase = email.toLowerCase();

    User.findOne({email: emailLowerCase}, (error, userStorage) => {
        if(error){
            res.status(500).send({mgs : "Erro de servidor!"});
        }else{
            bcrypt.compare(password, userStorage.password, (bcryptError, check) => {
                if(bcryptError){
                    res.status(500).send({mgs:"error de servidor"});
                }else if(!check){
                    res.status(500).send({mgs:"email ou senha invalidos"});
                }else{
                    res.status(500).send({
                        mgs : "usuario logado com sucesso",

                        //TODO : Implementar JWT
                        // accesstoken : userStorage.accessToken,
                        //refreshToken : userStorage.refreshToken,
                    });
                }
            });
        }
    });

};

function refreshAccessToken(req,res){
    res.status(200).send({mgs:"refresh TOken"});
}


export const AuthController = {
    register,
    login,
    refreshAccessToken
}
