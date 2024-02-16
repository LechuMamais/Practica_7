const ConsolaRoutes = require('express').Router();
const { isAuthAdmin } = require('../../middlewares/isAuthAdmin.middleware');
const { getConsolaById, getConsolas, createConsola, updateConsola, deleteConsola } = require('../controllers/consolas.controller');

ConsolaRoutes.get('/:id', getConsolaById);
ConsolaRoutes.get('/', getConsolas);
ConsolaRoutes.post('/', [isAuthAdmin] , createConsola);
ConsolaRoutes.put('/:id', [isAuthAdmin] , updateConsola);
ConsolaRoutes.delete('/:id', [isAuthAdmin] , deleteConsola);

module.exports = ConsolaRoutes;