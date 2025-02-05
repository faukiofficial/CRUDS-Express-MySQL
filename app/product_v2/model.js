const sequelize = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("Product", {
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;