const UserRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth.middleware')
const { isAuthAdmin } = require('../../middlewares/isAuthAdmin.middleware')
const { registerUser, loginUser, logoutUser, getUsers, getUsersById, getUsersByEmail, makeAdmin, changeRol } = require('../controllers/user.controller')

UserRoutes.get('/', [isAuthAdmin] , getUsers)
UserRoutes.get('/id/:id', [isAuthAdmin] , getUsersById)
UserRoutes.post('/register', registerUser)
UserRoutes.post('/login', loginUser)
UserRoutes.post('/logout', isAuth, logoutUser)
UserRoutes.put('/newadmin/:id', [isAuthAdmin] , makeAdmin)
UserRoutes.put('/changerol/:id', [isAuthAdmin] , changeRol)


module.exports = UserRoutes
