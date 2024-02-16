const GameRoutes = require('express').Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const { isAuthAdmin } = require('../../middlewares/isAuthAdmin.middleware');
const { getGameById, getGames, createGame, updateGame, deleteGame } = require('../controllers/games.controller');

GameRoutes.get('/:id', [isAuth], getGameById);
GameRoutes.get('/', [isAuth], getGames);
GameRoutes.post('/', [isAuthAdmin] , createGame);
GameRoutes.put('/:id', [isAuthAdmin] , updateGame);
GameRoutes.delete('/:id', [isAuthAdmin] , deleteGame);

module.exports = GameRoutes;