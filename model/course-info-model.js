const { Sequelize, DataTypes } = require("sequelize");
const database = require("../database/db.js");

const Course = database.define('Course', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topics: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    schedule: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
  
  module.exports = Course;