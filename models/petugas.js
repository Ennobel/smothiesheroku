'use strict';
module.exports = (sequelize, DataTypes) => {
  const Petugas = sequelize.define('Petugas', {
    name: DataTypes.STRING,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {});
  Petugas.associate = function(models) {
    // associations can be defined here
  };
  return Petugas;
};