function adminMiddleware(req,res,next){
    if(!req.session.userLogged  || req.session.userLogged==0){
        return res.redirect('/users/login');
    }
    next();
}
module.exports=adminMiddleware;