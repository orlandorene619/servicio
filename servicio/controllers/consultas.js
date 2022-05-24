// llamada al modelo consultas
const consultas = require('../models').consultas;

// guardar consulta
function create(req, res){
    consultas.create(req.body)
    .then(consulta=>{
        res.status(200).send({consulta});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

// actualizar consulta
function update(req, res){
    var id = req.body.id_consulta;

    consultas.findOne({ where: { id_consulta: id } })

    .then(consulta =>{
        if(consulta != null){
            consulta.update(req.body)
            .then(() => {
                res.status(200).send({consulta});
            })
            .catch(err => {
                res.status(500).send({err});
            })
        }else{
            res.status(500).send({msg: 'La consulta ' + id + 'no existe..!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// eliminar consulta
function remove(req, res){

    var id = req.params.id;

    consultas.findOne({ where: { id_consulta: id, } })

    .then(consultaBuscar => {
        
        if(consultaBuscar != null){
            consultas.destroy({
                where: {
                    id_consulta: id,
                }
            })
            .then(consulta => {
                res.status(200).send({consulta});
            })
            .catch(err => {
                res.status(500).send({message: "Ocurrio un error al eliminar la consulta"});
            })
        }else {
            res.status(500).send({msg: 'La consulta ' + id + 'no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// buscar consulta por id

function getById(req, res){
    var id = req.params.id;

    consultas.findOne({ where: { id_consulta: id } })
    .then(consulta=>{
        res.status(200).send({consulta});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

// consultas por usuario

function getConsultaById(req, res){

    var fkid = req.params.fk_usuario;
    consultas.findAll({where: {fk_usuario: fkid }})

    .then(consultalista => {
        res.status(200).send({consultalista});
    })
    .catch(err => {
        res.status(500).send({msg : 'No se han agregado consultas'});
    });
}

// funcion de listar todas las consultas
function list(req, res){

    consultas.findAll()

    .then(consultalista => {
        res.status(200).send({consultalista});
    })
    .catch(err => {
        res.status(500).send({msg: 'no existe consulta'});
    });
}

module.exports={
    list, getById, create, update, remove, getConsultaById
}