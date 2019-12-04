'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trafo = sequelize.define('Trafo', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    Ir: DataTypes.DOUBLE,
    Is: DataTypes.DOUBLE,
    It: DataTypes.DOUBLE,
    Vs: DataTypes.DOUBLE,
    Vr: DataTypes.DOUBLE,
    Vt: DataTypes.DOUBLE,
    f: DataTypes.DOUBLE,
    PF: DataTypes.DOUBLE,
    KWH: DataTypes.DOUBLE,
    KVAR: DataTypes.DOUBLE,
    THDI: DataTypes.DOUBLE,
    THDV: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {});
  Trafo.associate = function(models) {
    // associations can be defined here
  };
  return Trafo;
};