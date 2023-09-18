const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Editorial = sequelize.define('Editorial', {
  name: {
    type: DataTypes.STRING(30)
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(60),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  website: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  timestamps: false,
});

module.exports = Editorial;
