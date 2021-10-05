function adminMiddleware(req, res, next) {
    if (!req.session.userLogged || req.session.userLogged.user_type.data[0] == 0) {
        return res.redirect('/');
    }
    next();
}
module.exports = adminMiddleware;