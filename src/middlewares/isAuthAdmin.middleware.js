const { isAuth }= require("./auth.middleware.js");
const { isAdmin }= require("./isAdmin.middleware.js");

const isAuthAdmin = async (req, res, next) => {
    await isAuth(req, res)
    await isAdmin(req, res, next)
}
module.exports = {isAuthAdmin}