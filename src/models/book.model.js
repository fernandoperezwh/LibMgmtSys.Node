const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  publish_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
});

module.exports = Book;
