const usuariosController = require('../controllers/usuarios');

module.exports = (app) => {
    app.post('/api/usuarioIngresar', usuariosController.ingreso)
    app.get('/api/usuarios', usuariosController.list)
    app.get('/api/usuario/:id', usuariosController.getById)
    app.post('/api/usuario', usuariosController.create)
    app.put('/api/usuario/:id', usuariosController.update)
    app.delete('/api/usuario/:id', usuariosController.remove)
}