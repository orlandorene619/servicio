 module.exports = function(sequelize, DataTypes){
     return sequelize.define('consultas', {
         id_consulta: {
             type: DataTypes.INTEGER,
             allowNull: false,
             autoIncrement: true,
             primaryKey: true
         },
         nombre_doctor: {
             type: DataTypes.TEXT,
             allowNull: true
         },
         especialidad: {
             type: DataTypes.TEXT,
             allowNull: true
         },
         fecha_consulta: {
             type: DataTypes.DATE,
             allowNull: true
         },
         horario: {
             type: DataTypes.TIME,
             allowNull: true

         },
         fk_usuario: {
             type: DataTypes.INTEGER,
             allowNull: true
         }
     }, {
         tableName: 'consultas',
         timestamps: false
     });
 };