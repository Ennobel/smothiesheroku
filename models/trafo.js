'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trafo = sequelize.define('Trafo', {
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {});
  Trafo.associate = function(models) {
    // associations can be defined here
  };
  return Trafo;
};