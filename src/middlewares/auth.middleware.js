const User = require('../api/models/user.model')
const { verifyToken } = require('../utils/token')

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return next(new Error('Unauthorized, you have no token'));
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    user = await User.findById(decoded.id);
    user.contraseña = null;
    req.user = user;
    console.log("Usuario autenticado como registrado");
    if(next){
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = { isAuth };