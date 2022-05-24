module.exports = function(sequelize, DataTypes){
    return sequelize.define('medicamentos',{
        id_medicamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_medicamento: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        horario: {
            type: DataTypes.TIME,
            allowNull: true
        },
        dosis: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fk_usuario: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'medicamentos',
        timestamps: false
    });
};