
module.exports= function(sequelize, DataTypes){
    return sequelize.define('usuarios', {
        id_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        nombre:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        apellido:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        correo:{
            type: DataTypes.TEXT,
            allowNull: true

        },
        password:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        telefono:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        nombre_secundario:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        telefono_secundario:{
            type: DataTypes.TEXT,
            allowNull: true
        },

    }, {
        tableName: 'usuarios',
        timestamps: false

    });
};