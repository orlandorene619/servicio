// llamada al modelo medicamentos
const medicamentos = require('../models').medicamentos;

// guardar medicamentos
function create(req, res){
    medicamentos.create(req.body)
    .then(medicamento=>{
        res.status(200).send({medicamento});
    })
    .catch(err => {
        res.status(500).send({err});
    })
}


// actualizar medicamento
function update(req, res){
    var id = req.body.id_medicamento;

    medicamentos.findOne({ where: { id_medicamento: id }})

    .then(medicamento => {
        if(medicamento != null ){
            medicamento.update(req.body)
            .then(() => {
                res.status(200).send({medicamento});
            })
            .catch(err => {
                res.status(500).send({err});
            })
        } else{
            res.status(500).send({msg: 'La persona ' + id + 'no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// eliminar medicamento
function remove(req, res){

    var id = req.params.id;

    medicamentos.findOne({ where: { id_medicamento: id, }})

    .then(medicamentoBuscar => {
        if(medicamentoBuscar != null){
            medicamentos.destroy({
                where: {
                    id_medicamento: id,
                }
            })
            .then(medicamento => {
                res.status(200).send({medicamento});
            })
            .catch(err => {
                res.status(500).send({message: "Ocurrio un error al eliminar el medicamento.."});
            })
        }else{
            res.status(500).send({msg: 'El medicamento ' + id + 'no existe'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}


// buscar por id

function getById(req, res){
    var id = req.params.id;

    medicamentos.findOne({ where: { id_medicamento: id } })
    .then(medicamento => {
        res.status(200).send({medicamento});
    })
    .catch(err => {
        res.status(500).send({err});
    })
}

// listado de medicamento por usuario

function getMedicamentoById(req, res){
    var fkid = req.params.fk_usuario;

    medicamentos.findAll({where: {fk_usuario: fkid}})

    .then(medicamentolista => {

        res.status(200).send({medicamentolista});

    })
    .catch(err => {
        res.status(500).send({msg: 'No se ha registrado ningun medicamento'});
    });
}

// listar todos los medicamentos
function list(req, res){

    medicamentos.findAll()

    .then(medicamentolista => {
        res.status(200).send({medicamentolista});

    })
    .catch(err => {
        res.status(500).send({msg: 'no existe medicamento'});
    });
}

module.exports={
    list, getById, create, update, remove, getMedicamentoById
}