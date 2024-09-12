import { DataTypes } from "sequelize";
import db from "../utils/conecction.js";
import Item from "./ItemModel.js";
const Admin = db.define(
  //memberikan nama model dengan nama book, secara default jika tidak memberikan tablename maka akan menjadi nama jamak
  "Admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "admin",
  }
);

Admin.hasMany(Item, {
  //cascade digunakan ketika data di tabel referensi dihapus,maka data yang terkait di tabel ini juga akan dihapus
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
//buku dimiliki satu user
Item.belongsTo(Admin, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Admin;
