const medicamentosController = require('../controllers/medicamentos');

module.exports = (app) => {
    app.get('/api/medicamentos', medicamentosController.list)
    app.get('/api/medicamento/:id', medicamentosController.getById)
    app.post('/api/medicamento', medicamentosController.create)
    app.put('/api/medicamento/:id', medicamentosController.update)
    app.delete('/api/medicamento/:id', medicamentosController.remove)
    app.get('/api/medicamentoUS/:fk_usuario', medicamentosController.getMedicamentoById)
}