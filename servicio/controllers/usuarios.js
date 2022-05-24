// llamada del modelo usuario
const usuarios = require('../models').usuarios;

// login
function ingreso( req, res){
    var users = new usuarios();
    var params = req.body;

    if(params.correo && params.password){
        users.id_usuario = params.id_usuario;
        users.correo = params.correo;
        users.contraseña = params.password;

        usuarios.findOne({ where: {
            correo: users.correo,
            password: users.contraseña
        }})
        .then(usuarioIngresar => {
            if(usuarioIngresar != null){
                res.status(200).send({usuarioIngresar});
            }else{
                res.status(500).send({msg: 'Error de contraseña.!'});
            }
    })
    .catch(err => {
        res.status(500).send({msg: 'Error de consulta...!'});
    });
    }else{ 
        res.status(200).send({
            msg: 'El correo y la contraseña son obligatorios..'
        });
    }
}



// guardar usuario
function create(req, res){
    usuarios.create(req.body)
    .then(usuarios=>{
        console.log('ok');
        res.status(200).send({usuarios});
    })
    .catch(err=>{
        res.status(500).send({msg: 'No se han guardado los datos del usuario...!'});
    })
}

// actualizar
function update(req, res){
    var id= req.body.id_usuario;

    usuarios.findOne({ where: {id_usuario: id } })

    .then(usuario => {
        if(usuario != null){
            usuario.update(req.body)
            .then(() => {
                res.status(200).send({usuario});
            })
            .catch(err => {
                res.status(500).send({err});
            })
        }else{
            res.status(500).send({msg : 'La persona ' + id + 'no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });

}

// eliminar
function remove(req, res){

    var id = req.params.id;

    usuarios.findOne({ where: { id_usuario: id, } })

    .then(usuarioBuscar => {

        if(usuarioBuscar != null){
            usuarios.destroy({
                where: {
                    id_usuario: id,
                }
            })
            .then(usuario => {
                res.status(200).send({usuario});
            })
            .catch(err => {
                res.status(500).send({message: "Ocurrio un error al eliminar usuario"});
            })
        }else{
            res.status(500).send({msg: 'La persona' + id + 'no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// buscar por codigo
function getById(req, res){
    var id = req.params.id;

    usuarios.findOne({ where: { id_usuario: id } })
    .then(usuario => {
        res.status(200).send({usuario});
    })
    .catch(err => {
        res.status(500).send({err});
    })
}


// listar todos los usuarios

function list(Req, res){

    usuarios.findAll()

    .then(usuariolista => {
        res.status(200).send({usuariolista});
    })
    .catch(err => {
        res.status(500).send({msg: 'no existe usuario'});
    });
}

module.exports={
    ingreso, list, getById, create, update, remove
}