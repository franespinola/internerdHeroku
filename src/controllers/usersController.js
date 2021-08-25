//requiriendo express validator//
const bcryptjs=require('bcryptjs')
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.resolve(__dirname, "../data/users.json");
console.log(__dirname)
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const User=require("../models/userMethod");



const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//----------------------------//

const usersController = {
  login: (req, res) => {
    res.render("users/login", {
      pageTitle: "Login",
    });
  },
  signup: (req, res) => {
    res.render("users/signup", {
      pageTitle: "Registrarse",
    });
  },
  profile: (req, res) => {
    res.render("users/profile", {
      pageTitle: "Perfil",
      id: req.params.id,
      usuario: users.find(x => x.id== req.params.id),
      user:req.session.userLogged

    });
  },
  logout:(req,res)=>{                          //metodo del logout
    req.session.destroy();
    return res.redirect('/')



  },
  edit: (req, res) => {
    res.render("users/editUser", {
      pageTitle: "Editar",
    });
  },
  editPut: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/editUser", {
        errors: resultValidation.mapped(),
        pageTitle: "Editar",
        oldData: req.body
      });
    }else{
      return res.redirect("/")
    }
  },
  signupPost: (req, res) => {
    const resultValidation = validationResult(req);
    //console.log(resultValidation)
    if (resultValidation.errors.length > 0) {
      return res.render("users/signup", {
        errors: resultValidation.mapped(),
        pageTitle: "Registro",
        oldData: req.body
      });
      }
    let userInDB=User.findByField('email',req.body.email);
    if(userInDB){
      return res.render("users/signup",{
        pageTitle:"Registro",
        errors:{
          email:{
            msg:'Este email ya está registrado'
          }
        },
        oldData:req.body
      });
    }
    let userToCreate={          
      ...req.body,
      pageTitle: "Registro",
      avatar:req.file.filename,
      contrasena:bcryptjs.hashSync(req.body.contrasena,10),
      confirmacion:bcryptjs.hashSync(req.body.confirmacion,10)

    }
    let userCreated=User.create(userToCreate);    
    return res.redirect("/users/login")
    
  },
  loginProcess:(req,res)=>{
    /*const resultValidation = validationResult(req);
    //console.log(resultValidation)
    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        errors: resultValidation.mapped(),
        pageTitle: "login",
        oldData: req.body
      });
      }else{
        return res.send(req.body)
      }*/
      let userToLogin=User.findByField('email',req.body.email)
      if(userToLogin){
        let isOkThePassword=bcryptjs.compareSync(req.body.contrasena,userToLogin.contrasena)
          if(isOkThePassword){
            delete userToLogin.contrasena;    //elimino la contraseña para q no me aparezca en mi profile
            req.session.userLogged=userToLogin
            return res.redirect('/users/profile/') //aca va la vista (hay q crearla)
        }
      }
      return res.render("users/login",{
        pageTitle:"Login",
        errors:{
          email:{
            msg:'Las credenciales son inválidas'
          }
        }
      });
  }
};
module.exports = usersController;
