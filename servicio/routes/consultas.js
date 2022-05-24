const consultasController = require('../controllers/consultas');

module.exports = (app) => {
    app.get('/api/consultas', consultasController.list)
    app.get('/api/consulta/:id', consultasController.getById)
    app.post('/api/consulta', consultasController.create)
    app.put('/api/consulta/:id', consultasController.update)
    app.delete('/api/consulta/:id', consultasController.remove)
    app.get('/api/consultaUS/:fk_usuario', consultasController.getConsultaById)
    
}