'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trafo = sequelize.define('Trafo', {
    location: DataTypes.DOUBLE,
    status: DataTypes.STRING
  }, {});
  Trafo.associate = function(models) {
    // associations can be defined here
  };
  return Trafo;
};